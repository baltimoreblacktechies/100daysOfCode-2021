from typing import List

from python_git_wrapper import Repository, GitError

from absl import app  # type: ignore
from absl import flags

from cache import Cache
from graphics import generate_images

FLAGS = flags.FLAGS
flags.DEFINE_string(
    "repository",
    ".", ("The root directory of the repository."),
    short_name='r')
flags.DEFINE_string(
    "cache",
    "tracker_cache.json", ("Cache file so that data does not have to be "
                           "recomputed."),
    short_name='c')
flags.DEFINE_string(
    "image",
    "track.png", ("Resultant image location."),
    short_name='i')


def main(unused: List[str]):
    del unused
    repository = Repository(FLAGS.repository)

    cache = Cache(FLAGS.cache)
    cache.update(repository)
    cache.dump()

    generate_images(cache, FLAGS.image)


if __name__ == '__main__':
    app.run(main)
