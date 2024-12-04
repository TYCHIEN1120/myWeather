// 特色區元件
function ShowContent() {
    // 特色區資料
    const contentDate = [
        {
            id: 1,
            title: '教學影音',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores voluptate enim in quos',
        },
        {
            id: 2,
            title: '良性互動',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores voluptate enim in quos',
        },
        {
            id: 3,
            title: '趨勢分享',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores voluptate enim in quos',
        },
    ]
    return (
        <>
            {
                contentDate.map((item) => {
                    return (
                        <>
                            <div class="box" key={item.id}>
                                <h2><strong>{item.title}</strong></h2>
                                <p>{item.desc}</p>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default ShowContent