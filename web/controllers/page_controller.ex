defmodule Splack.PageController do
  use Splack.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
