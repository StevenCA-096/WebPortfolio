import { Grid } from '@mui/material'
import React from 'react'
import GradientText from '../../components/Text/GradientText'
import SkillCard from '../../components/Cards/SkillCard'
import { MySkillsList } from '../../data/MySkillsList'
import { useTranslation } from 'react-i18next'

const MySkills = () => {
    const { t } = useTranslation('home'); 

    return (
        <>
            {/* Skills */}
            <Grid container item xs={12} my={{ xs: 10 }}>
                <Grid item xs={12}>
                    <GradientText textAlign='center'>
                        {t('sections.skills')} 
                    </GradientText>
                </Grid>
                <Grid container item xs={12} sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    {
                        MySkillsList.map((skill, index) =>
                            <Grid item xs={6} lg={2} key={index}>
                                <SkillCard icon={skill?.imgUrl} title={skill?.title} />
                            </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default MySkills