# take in a parquet file and print out a JSON file
# Usage: python parquetToJSON.py <parquet file> <JSON file>
import pandas as pd
import sys

for arg in sys.argv[1:]: 
    print(arg)
    parq = pd.read_parquet('./public/Data/' + arg + '.parquet')
    parq.to_json('./public/Data/' + arg + '.json', orient='records')
