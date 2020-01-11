import numpy as np
import pandas as pd

def create_fv_table(startingCapitalAmount, additionAmount, numberOfYears):
    df = pd.read_csv('./data/data.csv')
    df = df.iloc[:-3]

    periods = numberOfYears * 12
    slices = len(df['Real Yield']) - periods

    fv_table = np.zeros((numberOfYears, 3)) # mean, min, max
    fv_table = pd.DataFrame(fv_table)
    fv_table.columns = ['median', 'min', 'max']

    temp_table = np.zeros((numberOfYears, slices))
    temp_table = pd.DataFrame(temp_table)

    for i in range(slices):
        capital = startingCapitalAmount
        
        for j in range(periods):
            capital = capital * (1 + df.iloc[i + j, 0]) + additionAmount
            if j % 12 == 0:
                row_index = int(j / 12)
                temp_table.iloc[row_index, i] = capital

    std = temp_table.std(axis=1)
    r_median = temp_table.median(axis=1)
    r_min = r_median - std
    r_max = r_median + std

    fv_table['median'] = r_median
    fv_table['min'] = r_min
    fv_table['max'] = r_max

    fv_table.loc[-1] = [startingCapitalAmount, startingCapitalAmount, startingCapitalAmount]  # adding a row
    fv_table.index = fv_table.index + 1  # shifting index
    fv_table = fv_table.sort_index()  # sorting by index

    return fv_table.to_dict(orient='records')