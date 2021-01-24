import React, { useEffect, useRef, useState } from 'react'
import { getSubscribersCount } from '../services/youtube.service';
import '../css/LiveSubscribersCount.scss';
import { bunnyIcon, small, large, carrot, rabbitShape, getBackground } from '../helpers/images'
import { useSpring, animated } from 'react-spring'
import useScrollPosition from '@react-hook/window-scroll'
import { Trans, useTranslation } from 'react-i18next'
import ExternalLink from './ExternalLink'

const LiveSubscribersCount = ({socket}) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [count, setCount] = useState(0);
    const [prevCount, setPrevCount] = useState(0);
    const [t] = useTranslation("home")

    const useSlideAnimationOnScroll = (friction) => {
        return useSpring(shouldAnimate ? {
            transform: `translateX(0%)`,
            visibility: 'visible',
            from: {
                transform: `translateX(200%)`
            },
            config: {
                tension: 200,
                friction: friction || 50
            }
        } : { visibility: 'hidden' })
    }

    const counterAnimator = useSpring({ config: { friction: 35, tension: 200 }, number: count || 0, from: { number: prevCount } })
    const scrollYPosition = useScrollPosition(60);
    const elementRef = useRef(null);

    useEffect(() => {
        const scrollTop = elementRef.current.getBoundingClientRect().top
        if (scrollTop < 500) {
            setShouldAnimate(true);
        }

    }, [scrollYPosition])

    useEffect(() => {
        //Update current count from server's memory
        (async () => {
            const { count } = await getSubscribersCount()
            setCount(count);
        })();

        if(socket) {
            socket.on("updateSubscribersCount", data => {
                setCount(prev => {
                    setPrevCount(prev)
                    return data;
                    }
                );
            })
        }

    }, [socket])
    

    return (
        <div ref={elementRef} className="subscribers-count-container">
            <div className="row-1">
                <animated.div style={useSlideAnimationOnScroll(150)} className="title">
                    <Trans t={t}>Current Nousagi <span className="employee-count-text">Employee Count</span></Trans>
                </animated.div>

                <animated.div style={useSlideAnimationOnScroll(0)} className="carrot">
                    <img src={carrot} className="carrot-opaque carrot-small" alt="" />
                </animated.div>
            </div>

            <animated.div style={useSlideAnimationOnScroll(0)} className="row-2">
                <div className="carrot-2">
                    <img src={carrot} className="carrot carrot-opaque carrot-small carrot-2" alt="" />
                </div>

                <div className="carrot-3">
                    <img src={carrot}  className="carrot carrot-opaque carrot-small carrot-3"alt="" />
                </div>

                <div className="rabbit-shape-small">
                    <img  src={small} alt="" />
                </div>

            </animated.div>
            
            <animated.div  style={useSlideAnimationOnScroll(200)} className="row-3">
                <div className="count-container" style={getBackground(rabbitShape)}>
                    <animated.span style={counterAnimator} className="count">{counterAnimator.number.interpolate(count => Math.round(count).toLocaleString())}</animated.span>
                    <img className="bunny-icon" src={bunnyIcon} alt="" />
                </div>
                
            </animated.div>

            <animated.div style={useSlideAnimationOnScroll(0)} className="row-4">
                <div className="subscribe-button" style={getBackground(carrot)}>
                    <ExternalLink excludeIcon href="https://www.youtube.com/channel/UC1DCedRgGHBdm81E1llLhOQ" className="subscribe-text">{t("Subscribe")}</ExternalLink>
                </div>

                <div className="rabbit-shape">
                    <img src={large} alt="" />
                </div>

            </animated.div>

            <animated.div  style={useSlideAnimationOnScroll(0)} className="row-5">
                <div className="carrot-1">
                    <img src={carrot} className="carrot carrot-opaque" alt="" />
                </div>

                <div className="carrot-2">
                    <img src={carrot} className="carrot carrot-opaque" alt="" />
                </div>

            </animated.div>

        </div>
    )

}

export default LiveSubscribersCount