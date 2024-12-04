function ShowContentClass() {
    // 推薦課程資料
    const contentClassData = [
        {
            id: 1,
            imgUrl: '../public/images/unity.jpg',
            title: 'Unity5',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            tercher: 'XXX',
            hour: '4hr',
            price: 'NT1600',
            priceSale: 'NT1200',
        },
        {
            id: 2,
            imgUrl: '../public/images/gamesalad.jpg',
            title: 'gamesalad',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            tercher: 'XXX',
            hour: '6',
            price: 'NT2600',
            priceSale: 'NT1200',
        },
        {
            id: 3,
            imgUrl: '../public/images/gwd.jpg',
            title: 'gwd',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            tercher: 'XXX',
            hour: '8',
            price: 'NT3600',
            priceSale: 'NT1200',
        },
    ]
    return (
        <>
            {
                contentClassData.map((item) => {
                    return (
                        <div className="box2" key={item.id}>
                            <p><img src={item.imgUrl} alt="" /></p>
                            <h3>{item.title}</h3>
                            <p className='p-blue'>{item.desc}</p>
                            <p>講師:{item.tercher}</p>
                            <p>課程時數:{item.hour}小時</p>
                            <p><span className='span1'>原價:{item.price}</span><span>{item.priceSale}</span></p>
                            <p><button>付款上課去</button></p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ShowContentClass