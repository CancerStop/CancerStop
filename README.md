# Overview

CancerStop is a quick reference guide for different cancers.
We provide the following tools:
* Interactive survival charts (by age at diagnosis)
* A curated search engine
* A tool to link you to relevant clinical trials
* A tool to show approved cancer drugs (from the NCI)
* A tool to look up information by gene or mutation.


# Survival Curves

This feature is an interactive tool that presents the survival curve for a 
given cancer and age of diagnosis. Actual results from graphs may vary based 
on health of individual like Tissue grading and staging (in case of solid tumors),
ECOG score, success of the proposed treatment in clinical trials, besides other factors. 
These represent typically observed survival rates as culled from the NCI’s SEER program. 
As medical research and technology advances further and the standard of living improves 
these are very likely to change. Numbers for these curves are for information purposes only.
*NO RESPONSIBILITY IS CLAIMED WHATSOEVER.*

Non-Linear regression from SEER Stats Data

Data Source: 
Non-linear regression was performed from data available from the interactive tool SEER Fast Stats from NCI SEER Webpage. Following were the selections made from the drop down list

Data Selection Parameters:
Data Type: ‘SEER Survival’
Statistic Type: ‘Relative Survival by Survival Time’
Year Range: ‘1988-2013 (SEER 13)’
Cancer Site: ‘Chosen by what was being investigated’
Sub-Site: ‘Chosen by what was available based on choice made above’
Race/Ethnicity: ‘All Races (Includes Hispanic)’
Sex: ‘Both Sexes’
Age Range: 
Ages <20, 20-49, 50-64, 65-74, 75+
Output Format: 
Table
Regression Equation for Data:
Data from Table imported into spreadsheet (Microsoft Excel). Age ranges were averaged. For ages <20, 0 was taken as the lower limit and for ages above 75, 100 was taken as the upper limit. Graphs were plotted with averaged ages (10, 34.5, 57, 69.5, 87.5) on x-axis and Survival rates on y-axis. 

For each each year (1-10), trendline was added to each year series with display set to on for equation and R-squared values. Polynomial with 4th degree was chosen. Changed the trendline settings to display coefficients upto 10 digits. Recheck the correctness of the equation by entering random age values of x. 

Noted the equation for each of the 10 years separately. Used the ‘x’ in these equations as input for age to the appropriate ‘y’ - survival percentage.

# Search

This is a curated search engine powered by Google custom search.
Sites and sources are manually curated and checked so as to keep
the results as relevant as possible. The tabs are further refinement 
of the search results. The ‘Literature’ tab narrows down the results 
to show only relevant papers and biomedical literature from sources 
like Pubmed and others. Please contact us for any other medically 
relevant sources that you feel should also be included. We will be 
glad to review it and add it to our list.

# Clinical Trials

This particular feature links the selected cancer on the initial page 
to Clinicaltrials.gov. Herein one is connected to different ongoing 
clinical trials from around the globe. One can include search parameters 
in the search box that is presented. One can also use advanced searches therein.

# Approved Drugs

This feature connects the selected cancer type to approved drugs as 
presented in NCI's website. These pages are updated by NCI when new 
cancer drugs are approved.

# Genes And More

Genes & More provides you with more information about a Gene and its 
Variants. Currently,this feature connects you to ClinVar (from NCBI). 
In future this could be updated.

With the advent of whole genome sequencing techniques,
this feature becomes especially useful as gene panel 
reports become available to everyone who gets their genome
sequenced. As costs for sequencing come down further it’s
only time before before every user needs to access services 
like these to determine the course of a therapy using precision medicine.

This feature is particularly useful for research professionals 
who wish to have a quick reference on a gene variant from an NGS 
sequencing output or report. Regular users can also use format provided 
they have the Gene name and Variant from a Gene Panel report.

    ## Input Format
    For Gene: Enter the Gene Name in HUGO format e.g.BCOR, NPM1
    For Variant: Enter either the
    "c." for a coding DNA sequence (like "c.4009C>T")
    "g." for a genomic sequence (like g.119522C>T)
    "p." for a protein sequence (like p.Ser1397Tyr)
    NOTE: This feature is likely to undergo more improvements and upgrades for use in Precision Medicine.


# General
*The app is not affiliated to any of the external sources presented herein. 
Sites and sources used here are from prominently used information sources. 
These sources are likely to updated as and when needed.*
*AS ALWAYS one should always speak with your Doctor or Health Care Professional for any further guidance. Information provided here is for informational purposes only. NO RESPONSIBILITY OR LIABILITY IS CLAIMED WHATSOEVER.*

© 2023 Queromatics. All Rights Reserved.
Developed by Vedanth Ramji, Balaadithya Muralitharan, Ganesh Ram and Dr. Natarajan Ganesan.
