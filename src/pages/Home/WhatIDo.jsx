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
        appendDots: dots => (
            <div style={{
                textAlign: "center", // Centrar los dots
                marginTop: "12px"    // Espacio superior
            }}>
                <ul style={{
                    margin: "0px",
                    padding: "0px",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "center",
                    gap: "4px"
                }}>
                    {dots}
                </ul>
            </div>
        )
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
                        <Grid item xs={12} sx={{ px: 2 }} spacing={2}>
                            <Slider
                                {...sliderSettings}
                                dotsClass="custom-dots"
                            >
                                {whatIDoList.map((whatIDo, index) =>
                                    <Grid item xs={12} px={{xs:1, sm:0 }} key={index} >
                                        <WhatIDoCard icon={whatIDo.icon} text={whatIDo.text} title={whatIDo.title} key={index} />
                                    </Grid>
                                )}
                            </Slider>
                        </Grid>
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