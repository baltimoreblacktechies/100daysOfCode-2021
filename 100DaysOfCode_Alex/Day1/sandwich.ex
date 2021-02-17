defmodule Sandwich do
  def accept?(sandwich) do
    edible_meats = %{turkey: true, ham: false, chicken: true, olive_loaf: false}
    [ :bread, mystery_meat, :bread ] = sandwich

    case Map.fetch(edible_meats, mystery_meat) do
      {:ok, edible} ->
        if edible, do: "Yes please!", else: "No thanks."
      :error ->
        "I don't know what this is!"
    end
  end
end

IO.puts Sandwich.accept?([:bread, :turkey, :bread])
IO.puts Sandwich.accept?([:bread, :ham, :bread])
