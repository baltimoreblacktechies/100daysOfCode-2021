import os
import json

from python_git_wrapper import Repository, GitError

MERGE_STRING = "Merge pull request"
README_STRING = "Update README.md"


class Cache(object):

    __slots__ = ["_cache_location", "_json"]

    def __init__(self, cache_location: str):
        self._cache_location = cache_location
        self._json = Cache._get_cache(cache_location)

    def update(self, repository: Repository):
        for commit in self.walk_commit(repository):
            if commit.author not in self.commits:
                self.commits[commit.author] = []
            print(commit.author, commit.hash, commit.message, commit.datetime)
            self.visited.append(commit.hash)
            self.commits[commit.author].append(str(commit.datetime.date()))
            self.authors[commit.author] = commit.email

    def dump(self):
        with open(self._cache_location, "w") as cache:
            return json.dump(self._json, cache, sort_keys=True, indent=4)

    def walk_commit(self, repository: Repository):
        visited = set(repository.get_commit(visited) for visited in self.visited)
        search = set([repository.last_commit]) - visited
        print(search, repository.last_commit)
        while search:
            commit = search.pop()
            search |= set(commit.parents) - visited
            visited.add(commit)
            print("**", commit.author, commit.hash, commit.message, commit.datetime)
            if (MERGE_STRING not in commit.message
                    and README_STRING not in commit.message):
                yield commit

    def __getattr__(self, key: str):
        if key.startswith("_"):
            super().__getattr__(key)
        if key not in self._json:
            raise AttributeError(f"Cache key not found: {key}.")
        return self._json[key]

    @staticmethod
    def _get_cache(cache_location: str):
        if not os.path.exists(cache_location):
            return {"visited": [], "commits": {}, "authors": {}}

        with open(cache_location) as cache:
            return json.load(cache)
