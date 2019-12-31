import numpy as np
import pandas as pd

#def create_fv_table_old(startingCapitalAmount, additionAmount, numberOfYears):

    # if typeOfPeriod == 'Month':
    #     returns = monthly.returns
    # else:
    #     returns = yearly.returns

    # numberOfMonths = numberOfYears * 12

    # number_of_slices = len(returns) - numberOfMonths
    # list_of_slices = []

    # for i in range(0, number_of_slices):
    #     end = i + numberOfMonths + 1
    #     list_of_slices.append(returns[i:end])
    
    # list_of_returns = []

    # for j in range(0, len(list_of_slices)):
    #     temp_list_of_slices = list_of_slices[j]
    #     temp_value = 0
    #     temp_list_of_returns = []

    #     for k in range(0, len(temp_list_of_slices)):
    #         if temp_value == 0 and startingCapitalAmount > 0:
    #             temp_value = startingCapitalAmount * (1 + temp_list_of_slices[k])
    #         else:
    #             temp_value = temp_value * (1 + temp_list_of_slices[k]) + additionAmount
    #         temp_list_of_returns.append(temp_value)

    #     list_of_returns.append(temp_list_of_returns)

    # fv_table = np.zeros((numberOfMonths, 4)) # period, mean, min, max
    # fv_table = pd.DataFrame(fv_table)
    # fv_table.columns = ['period', 'mean', 'min', 'max']
    # fv_table['period'] = np.arange(1, numberOfMonths + 1)

    # for l in range(0, numberOfMonths):
    #     temp_list = []

    #     for m in range(0, len(list_of_returns)):
    #         temp_list.append(list_of_returns[m][l])

    #     np_array = np.asarray(temp_list)
    #     fv_table.iloc[l, 1] = np_array.mean()
    #     fv_table.iloc[l, 2] = np_array.min()
    #     fv_table.iloc[l, 3] = np_array.max()

    # return fv_table.to_dict(orient='records')

def create_fv_table(startingCapitalAmount, additionAmount, numberOfYears):
    df = pd.read_csv('./data/data.csv')
    df = df.iloc[:-3]

    periods = numberOfYears * 12
    slices = len(df['Date']) - periods

    fv_table = np.zeros((numberOfYears, 4)) # years, mean, min, max
    fv_table = pd.DataFrame(fv_table)
    fv_table.columns = ['years', 'mean', 'min', 'max']
    fv_table['years'] = np.arange(1, numberOfYears + 1)

    temp_table = np.zeros((numberOfYears, slices))
    temp_table = pd.DataFrame(temp_table)

    for i in range(slices):
        capital = startingCapitalAmount
        
        for j in range(periods):
            capital = capital * (1 + df.iloc[i + j, 1]) + additionAmount
            if j % 12 == 0:
                row_index = int(j / 12)
                temp_table.iloc[row_index, i] = capital

    std = temp_table.std(axis=1)
    r_mean = temp_table.mean(axis=1)
    r_min = r_mean - std
    r_max = r_mean + std

    fv_table['mean'] = r_mean
    fv_table['min'] = r_min
    fv_table['max'] = r_max

    fv_table.loc[-1] = [0, startingCapitalAmount, startingCapitalAmount, startingCapitalAmount]  # adding a row
    fv_table.index = fv_table.index + 1  # shifting index
    fv_table = fv_table.sort_index()  # sorting by index

    return fv_table.to_dict(orient='records')