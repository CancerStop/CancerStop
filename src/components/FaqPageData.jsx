export const FaqPageData = [
    {
        section_name: 'Survival Curves',
        queries_and_answers: [
            {
                question: 'What is this feature?',
                answer: `
                This feature is an interactive tool that presents the
                survival curve for a given cancer and age of diagnosis.

                Actual results from graphs may vary based on health of the
                individual like tissue grading and staging(in case of solid
                tumors), ECOG score, success of the proposed treatment in
                clinical trials, besides other factors. These represent
                typically observed survival rates as culled from the NCI's
                SEER program.

                As medical research and technology advances further and the
                standard of living improves these are very likely to change.
                Numbers for these curves are for information purposes only.
                NO RESPONSIBILITY IS CLAIMED WHATSOEVER.
                `
            },
            {
                question: 'How are survival curves computed?',
                answer: `Currently, the values for a given age are projected from the
                survival rates presented for specified age ranges in the
                SEER Registry. Survival rates are presented up to 10 years
                from the time of diagnosis.`
            },
            {
                question: 'What is the source of data for these survival curves?'
            }
        ]
    },
    {
        section_name: 'Search',
    },
    {
        section_name: 'Clinical Trials',
    },
    {
        section_name: 'Approved Drugs (NCI)'
    },
    {
        section_name: 'Genes & More',
    },
    {
        section_name: 'General'
    }
]