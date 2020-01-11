import numpy as np
import pandas as pd

def create_fv_table(startingCapitalAmount, additionAmount, numberOfYears):

    yield_np = np.genfromtxt('./data/data.csv', skip_header=1, skip_footer=3)

    periods = numberOfYears * 12
    slices = yield_np.size - periods

    fv_table = np.zeros((numberOfYears, 3)) # mean, min, max
    fv_table = pd.DataFrame(fv_table)
    fv_table.columns = ['median', 'min', 'max']

    temp_table = np.zeros((numberOfYears, slices)) # (rows, columns)
    temp_table = pd.DataFrame(temp_table)

    for i in range(slices):
        capital = startingCapitalAmount
        capital_series = []
    
        for j in range(periods):
            capital = capital * (1 + yield_np[i + j]) + additionAmount
            
            if j % 12 == 0:
                capital_series.append(capital)
        
        temp_table[i] = capital_series

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