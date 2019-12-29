import numpy as np
import pandas as pd

from . import monthly
from . import yearly

# first function -> now deprecated
#
# def create_fv_table(startingCapitalAmount, additionAmount, returnPercentage, numberOfPeriods, typeOfPeriod):
#     if typeOfPeriod == 'Month':
#         returnPercentage /= 12
#     # Creating the empty table
#     fv_table = np.zeros((numberOfPeriods, 5))
#     fv_table = pd.DataFrame(fv_table)
#     fv_table.columns = ['period', 'beg_val', 'deposit', 'ret', 'end_val']
#     fv_table['period'] = np.arange(1, numberOfPeriods + 1)
#     # Calculating the first row values
#     fv_table.iloc[0, 1] = startingCapitalAmount
#     fv_table.iloc[0, 2] = additionAmount
#     fv_table.iloc[0, 3] = (startingCapitalAmount +
#                            additionAmount) * returnPercentage
#     fv_table.iloc[0, 4] = fv_table.iloc[0, 1] + \
#         fv_table.iloc[0, 2] + fv_table.iloc[0, 3]
#     # Running the for loop for first phase
#     for i in range(1, numberOfPeriods):
#         fv_table.iloc[i, 1] = fv_table.iloc[(i - 1), 4]
#         fv_table.iloc[i, 2] = additionAmount
#         fv_table.iloc[i, 3] = (fv_table.iloc[i, 1] +
#                                fv_table.iloc[i, 2]) * returnPercentage
#         fv_table.iloc[i, 4] = (fv_table.iloc[i, 1] +
#                                fv_table.iloc[i, 2]) + fv_table.iloc[i, 3]
#     return fv_table.to_dict(orient='records')

def create_fv_table(startingCapitalAmount, additionAmount, numberOfPeriods, typeOfPeriod):

    if typeOfPeriod == 'Month':
        returns = monthly.returns
    else:
        returns = yearly.returns

    number_of_slices = len(returns) - numberOfPeriods
    list_of_slices = []

    for i in range(0, number_of_slices):
        end = i + numberOfPeriods + 1
        list_of_slices.append(returns[i:end])
    
    list_of_returns = []

    for j in range(0, len(list_of_slices)):
        temp_list_of_slices = list_of_slices[j]
        temp_value = 0
        temp_list_of_returns = []

        for k in range(0, len(temp_list_of_slices)):
            if temp_value == 0 and startingCapitalAmount > 0:
                temp_value = startingCapitalAmount * (1 + temp_list_of_slices[k])
            else:
                temp_value = temp_value * (1 + temp_list_of_slices[k]) + additionAmount
            temp_list_of_returns.append(temp_value)

        list_of_returns.append(temp_list_of_returns)

    fv_table = np.zeros((numberOfPeriods, 4)) # period, mean, min, max
    fv_table = pd.DataFrame(fv_table)
    fv_table.columns = ['period', 'mean', 'min', 'max']
    fv_table['period'] = np.arange(1, numberOfPeriods + 1)

    for l in range(0, numberOfPeriods):
        temp_list = []

        for m in range(0, len(list_of_returns)):
            temp_list.append(list_of_returns[m][l])

        np_array = np.asarray(temp_list)
        fv_table.iloc[l, 1] = np_array.mean()
        fv_table.iloc[l, 2] = np_array.min()
        fv_table.iloc[l, 3] = np_array.max()

    return fv_table.to_dict(orient='records')