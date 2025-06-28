import { Grid } from '@mui/material'
import React from 'react'
import GradientText from '../../components/Text/GradientText'
import { MyWhatIDoList } from '../../data/MyWhatIDoList'
import WhatIDoCard from '../../components/Cards/WhatIDoCard'
import { useTheme } from '@emotion/react'
import { useTranslation } from 'react-i18next'
import useIsMobile from '../../hooks/isMobile/useIsMobile'
import Slider from 'react-slick'

const WhatIDo = () => {
    const theme = useTheme()
    const { t: title } = useTranslation('home');
    const { t: whatIDo } = useTranslation('whatIDo');
    const whatIDoList = whatIDo('whatIDo', { returnObjects: true })
    const isMobile = useIsMobile()

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Grid container item>
            <Grid item xs={12}>
                <GradientText color={theme?.palette?.text?.secondary} textAlign={'center'}>
                    {title('sections.whatIDo')}
                </GradientText>
            </Grid>
            <Grid container sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: { xs: 2, md: 10 }, my: 4 }}>
                {
                    isMobile ? (
                        <Slider {...sliderSettings}>
                            {whatIDoList.map((whatIDo, index) =>
                            <Grid item xs={12} lg={3} key={index} sx={{height:100}}>
                                    <WhatIDoCard icon={whatIDo.icon} text={whatIDo.text} title={whatIDo.title} key={index} />
                                </Grid>
                            )}
                        </Slider>
                    ) : (
                        whatIDoList.map((whatIDo, index) =>
                            <Grid item xs={12} lg={3} key={index} sx={{ display: 'flex', flexDirection: "row", justifyContent: "center" }}>
                                <WhatIDoCard icon={whatIDo.icon} text={whatIDo.text} title={whatIDo.title} />
                            </Grid>
                        )
                    )
                }
            </Grid>
        </Grid>
    )
}

export default WhatIDo   