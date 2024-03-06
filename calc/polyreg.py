import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
import pandas as pd
import json
import os

ROOT = 'c:/Users/vedan/Queromatics/CancerStop/calc/data'

def preprocess_data(data_path):
    """Only Accepts Data Without SEER's Extra Annotations"""
    data_path = str(data_path).removesuffix('.csv')

    dataframe = pd.read_csv(f'{ROOT}{data_path}.csv')

    for i in dataframe.columns:
        if '.1' in i or '.2' in i:
            dataframe.drop([i], axis=1, inplace=True)

    dataframe.drop([0, 1], axis=0, inplace=True)
    dataframe.to_csv(f'{ROOT}/{data_path}_cleaned.csv', index=False)
    return dataframe

def perform_regression(data_path):
    dataframe = preprocess_data(data_path)
    ages = np.array([39, 64, 74]).reshape(-1, 1)
    data = {}

    for i in range(2, 12):
        survival_data = [
            # dataframe['Ages &lt;15'][i],
            dataframe['Ages 15-39'][i],
            dataframe['Ages 50-64'][i],
            dataframe['Ages 65-74'][i]
        ]

        data.update({i - 1: {'survival data': survival_data}})

    for i in data:
        survival_data = data[i]['survival data']

        poly_features = PolynomialFeatures(degree=2)
        X_poly = poly_features.fit_transform(ages)

        model = LinearRegression()
        model.fit(X_poly, survival_data)

        coef = model.coef_
        intercept = model.intercept_

        data[i].update({'a2': coef[2], 'a1': coef[1], 'a0': intercept})

    return data

def create_json_output(data, output_path):
    with open(f'{ROOT}{output_path}_equations.json', 'w') as outfile:
        json.dump(data, outfile)

data = perform_regression(r'/prostate/distant_raw')
create_json_output(data, r'/prostate/distant')
