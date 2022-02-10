import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import Spinner from './Spinner'

function Slider() {
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const listingsRef = collection(db, 'listings')
                const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
                const qSnap = await getDocs(q)

                let listings = []

                qSnap.forEach((doc) => {
                    return listings.push({
                        id: doc.id,
                        data: doc.data(),
                    })
                })

                //console.log(listings)
                setListings(listings)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        fetchListings()
    }, [])

    if (loading) {
        return <Spinner></Spinner>
    }

    if (listings.length === 0) {
        return <></>
    }

    return listings && (
        <>
            <p className="exploreHeading">Recommended</p>

            <Swiper slidesPerView={1} pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y]}>
                {listings.map(({ data, id }) => (
                    <SwiperSlide key={id} onClick={() => navigate(`/category/${data.type}/${id}`)}>
                        <div className="swiperSlideDiv"
                            style={{
                                height: '235px',
                                background: `url(${data.imageUrls[0]}) center no-repeat`,
                                backgroundSize: 'cover',
                            }}>
                            <p className="swiperSlideText">{data.name}</p>
                            <p className="swiperSlidePrice">
                                $ {data.discountedPrice || data.regularPrice}
                                {data.type === 'rent' && ' / month'}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Slider
