import subprocess
import os

db_file = "euro_db.sqlite"
csv_file = "data.csv"

# Removing previous sqlite database file if exists
if os.remove(db_file):
	print("OLD db file Removed!")
else:
	args = [
	    "sqlite3",
	    db_file,
	    "CREATE TABLE euro_table(No INTEGER, DAY TEXT, DD INTEGER, MMM TEXT, YYYY INTEGER, N1 INTEGER, N2 INTEGER, N3 INTEGER, N4 INTEGER, N5 INTEGER, L1 INTEGER, L2 INTEGER, BOTE INTEGER, WINS INTEGER)",
	    ]

	subprocess.call(args)

	args = [
	    "sqlite3",
	    db_file,
	    ".import "+csv_file+" euro_table",
	    ]

	subprocess.call(args)
