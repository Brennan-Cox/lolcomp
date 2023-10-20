# take in a parquet file and print out a JSON file
# Usage: python parquetToJSON.py <parquet file> <JSON file>
import pandas as pd
import sys

parq = pd.read_parquet('./public/Data/' + sys.argv[1] + '.parquet')
parq.to_json('./public/Data/' + sys.argv[1] + '.json', orient='records')
