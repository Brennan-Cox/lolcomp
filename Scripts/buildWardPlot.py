# the input to this script is a team name, 
# and the output should be an image called 
# ward_plot.png (a plot of dots depicting wards)
# superimposed on a map of the league of legends map
# the map is in ./public/images/LoL-Map.png

import pandas as pd
import matplotlib.pyplot as plt
import sys
from PIL import Image

try:
    data = pd.read_parquet('./public/Data/wards_placed.parquet')

    team_name = sys.argv[1]
    team_data = data[data['placer_team'] == team_name]
    image = Image.open('./public/images/LoL-Map2.png')
    pos = 15200
    neg = pos - 16000
    plt.imshow(image, extent=[neg, pos, neg, pos])
    plt.scatter(team_data['pos_x'], team_data['pos_y'], s=2, alpha=0.7)
    plt.xlabel('Ward X Position')
    plt.ylabel('Ward Y Position')
    plt.title('Ward Placement Map' + '\n' + team_name)

    plt.legend()

    plt.savefig('./public/images/ward_plot.png')
except Exception as e:
    print(e)
# plt.show()