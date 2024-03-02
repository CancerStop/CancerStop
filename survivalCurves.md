# Outline of Current Implementation
Until now, survival curves for a cancer type were constructed by initially performing polynomial regression on relative survival rates for different times since diagnosis of different age-groups. Then, the resulting functions from these regressions are used to calculate the relative survival rate of a specific time since diagnosis and age-group. This method is what the current paper on survival curves outlines.

Currently, the goal is to incorporate the variation in relative survival rates that staging can cause.

# General Approach To Survival Curves with Staging
The underlying approach to constructing survival curves remains more or less the same. The main divergence from the previous approach is that each type of staging will yield a different survival curve for the same cancer, age-group and time since diagnosis. Hence, from a presentation perspective, there will be five line-graphs displayed (with the option to toggle them between displaying and not displaying) for the five different types of staging given: all stages, localized, regional, distant, and unstaged.

To construct each graph, a methodical/iterative process needs to be adopted. For each cancer-type and staging, relative survival rates will be collected and polynomial regression will be applied in the same way as it was in the previous approach. However, now, complexity increases due the the larger number of regressions performed and the increased number of equations to handle.

# In-depth Approach To Survival Curves with Staging
Determine which cancers actually have staging data. Most cancer types have staging data, but, for example, acute lymphocytic leukemia (SEER*Explorer Application (cancer.gov)) does not contain a ‘compare by staging’ section. Hence, it must be determined beforehand if the staging update can be applied to a particular cancer-type.
For each cancer type with staging data, access the ‘localized’ stage and select appropriate age-groups that will give a good distribution to perform polynomial regression.

Follow the same method of constructing survival curves as is done in the current implementation.
Repeat steps 2-3 for the rest of the stages: regional, distant, and unstaged. The current implementation by default already gives a survival curve for ‘all stages’.

Repeat all this for every cancer-type possible.

# Cancers with Staging Data
1) Colon [DONE]
2) Rectum [TOUGH TO DO]
3) Adenocarcinoma of Esophagus [DONE]
4) Squamous Cell Carcinoma of the Esophagus [TOUGH TO DO]
5) Adenocarcinoma of Lungs [DONE]
6) Glioblastoma 
7) Liver Lymphatic Bile & Duct
8) Melanoma of the Skin
9) Ovary
10) Pancreas
11) Prostate
12) Small Intestine
13) Stomach
14) Testicular