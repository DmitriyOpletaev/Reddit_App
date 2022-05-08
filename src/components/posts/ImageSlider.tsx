import React, {FC, useRef} from "react"
import { Carousel, Col, Row} from "antd"
import { RightCircleOutlined,LeftCircleOutlined } from '@ant-design/icons'
import {CarouselRef} from "antd/lib/carousel";

export const ImageSlider: FC<ImageSliderProps> = ({imgUrls}) => {

    const Images = imgUrls.map(e => (
                <img src={e}/>
    ))
    const carouselRef=useRef<CarouselRef>(null)

    function next(){
        if(carouselRef && carouselRef.current){
            carouselRef.current.next()
        }
    }
    function prev(){
        if(carouselRef && carouselRef.current){
            carouselRef.current.prev()
        }
    }


    return (
        <Row className={'imageSliderWrapper'} justify={'space-around'} align={'middle'}>
            <Col span={1} className={'arrowContainer'}>
                <PrevArrow prev={prev}/>
            </Col>
            <Col span={21} className={'carouselContainer'}>
                <Carousel
                    effect={'scrollx'}
                    afterChange={()=>console.log(1)}
                    centerMode={false}
                    infinite={false}
                    draggable
                    dots={false}
                    ref={carouselRef}
                    className={'carousel'}

                >
                    {Images}
                </Carousel>
            </Col>
            <Col span={1} className={'arrowContainer'}>
                <NextArrow next={next}/>
            </Col>

        </Row>

    )
}

export const NextArrow:FC<NextArrowProps>=({next})=>{

    return(
        <RightCircleOutlined onClick={next}/>
    )
}
export const PrevArrow:FC<PrevArrowProps>=({prev})=>{

    return(
        <LeftCircleOutlined onClick={prev} />
    )
}
type NextArrowProps={
    next:()=>void
}
type PrevArrowProps={
    prev:()=>void
}

type ImageSliderProps = {
    imgUrls: Array<string>
}
