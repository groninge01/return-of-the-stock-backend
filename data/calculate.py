import numpy as np
import pandas as pd


def create_fv_table(startingCapitalAmount, additionAmount, returnPercentage, numberOfPeriods, typeOfPeriod):
    if typeOfPeriod == 'Month':
        returnPercentage /= 12
    # Creating the empty table
    fv_table = np.zeros((numberOfPeriods, 5))
    fv_table = pd.DataFrame(fv_table)
    fv_table.columns = ['period', 'beg_val', 'deposit', 'ret', 'end_val']
    fv_table['period'] = np.arange(1, numberOfPeriods + 1)
    # Calculating the first row values
    fv_table.iloc[0, 1] = startingCapitalAmount
    fv_table.iloc[0, 2] = additionAmount
    fv_table.iloc[0, 3] = (startingCapitalAmount +
                           additionAmount) * returnPercentage
    fv_table.iloc[0, 4] = fv_table.iloc[0, 1] + \
        fv_table.iloc[0, 2] + fv_table.iloc[0, 3]
    # Running the for loop for first phase
    for i in range(1, numberOfPeriods):
        fv_table.iloc[i, 1] = fv_table.iloc[(i - 1), 4]
        fv_table.iloc[i, 2] = additionAmount
        fv_table.iloc[i, 3] = (fv_table.iloc[i, 1] +
                               fv_table.iloc[i, 2]) * returnPercentage
        fv_table.iloc[i, 4] = (fv_table.iloc[i, 1] +
                               fv_table.iloc[i, 2]) + fv_table.iloc[i, 3]

    return fv_table.to_dict(orient='records')
