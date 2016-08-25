use Mix.Config

# In this file, we keep production configuration that
# you likely want to automate and keep it away from
# your version control system.
#
# You should document the content of this
# file or create a script for recreating it, since it's
# kept out of version control and might be hard to recover
# or recreate for your teammates (or you later on).
config :splack, Splack.Endpoint,
  secret_key_base: "/9LwJBRxCs+5OiqQbsZy7K/75OktuZhaxC526bfHuLRYLVsiuqO0OrwHuzCA0Qzo"

# Configure your database
config :splack, Splack.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "marksargento",
  password: "",
  database: "splack_dev",
  pool_size: 10
