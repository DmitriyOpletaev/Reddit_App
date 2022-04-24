import React, {FC, Ref, useRef} from "react"
import {Button, Carousel, Col, Image, Row} from "antd"
import m from './PostImages.module.scss'
import {LeftOutlined, RightOutlined} from '@ant-design/icons'
import {CarouselRef} from "antd/lib/carousel";
import {Settings} from "@ant-design/react-slick";

const imgArray = ['https://external-preview.redd.it/2cS8xaAaIIPjXrEhvCEYC_KzJ7cOjwQQj26IyCAM2IU.jpg?auto=webp&s=5bbe7258a5f9e97f8de187c04480f54e3722e3ee',
    'https://external-preview.redd.it/9ApcyvcLfL-80jmy74s1NGRYaL4gWQPFjKcB4gwFRlg.png?format=pjpg&auto=webp&s=dba7f5a8e1b521de64d3b073b621c0f2b278690b',
    'https://preview.redd.it/tblpmn1sd2v81.jpg?auto=webp&s=3b0f2c29ef71acbe49e9c3f3b00bee665fce33e5',

]
const carouselSettings: Settings = {
    dots: false,
    className: m.carousel,
    slidesToShow: 1,
    infinite: false,
    draggable: true,
    useCSS: true


}
export const PostImages: FC<PostImagesProps> = ({imgUrls}) => {
    const carousel = useRef<CarouselRef>(null)
    const isShowArrows=imgUrls.length>1
    function next() {
        if (carousel.current) {
            carousel.current.next()
        }
    }

    function prev() {
        if (carousel.current) {
            carousel.current.prev()
        }
    }

    const Images = imgUrls.map(e => (
            <div className={m.imgWrapper}>
                <div className={m.imgContainer}>
                    <img className={m.image} src={e}/>
                </div>
            </div>
        )
    )
    return (
        <Row justify="space-around"  align={'middle'} >
            <Col span={2} className={m.prevArrowContainer}>
                {isShowArrows&&<PrevArrow prev={prev}/>}
            </Col>
            <Col span={19}>
                <Carousel   {...carouselSettings} ref={carousel}>
                    {Images}
                </Carousel>
            </Col>
            <Col span={2}  className={m.nextArrowContainer} >
                {isShowArrows &&<NextArrow next={next}/>}
            </Col>
        </Row>


    )
}
const NextArrow: FC<NextArrowProps> = ({next}) => {
    return (
            <Button className={m.nextArrow} size={'small'}>
                < RightOutlined
                    onClick={next}
                    className={m.nextArrow}
                />
            </Button>

    )
}
const PrevArrow: FC<PrevArrowProps> = ({prev}) => {

    return (
        <Button className={m.prevArrow} size={'small'}>
            <LeftOutlined
                onClick={prev}
                className={m.prevArrow}
            />
        </Button>

    )
}


type PostImagesProps = {
    imgUrls: Array<string>
}
type PrevArrowProps = {
    prev: () => void
}
type NextArrowProps = {
    next: () => void
}
