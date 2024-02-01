import React from 'react';
import NextProject from "../components/Impulse/NextProject/NextProject";
import InfoLadder from "../components/InfoLadder/InfoLadder";

const Impulse = () => {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => {
            return images[item.replace('./', '')] = r(item);
        });
        return images;
    }

    const images = importAll(require.context('../images/impulse', false, /\.(png|jpe?g|svg)$/));

    const impulseInfo = [
        {
            title: 'Интересный игровой мир',
            description: 'Каждый следующий проект не похож на предыдущий, наша команда бережно относится к выбору и ' +
                'проработке игрового сюжета\n' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo faucibus dolor a scelerisque. ' +
                'Aliquam dapibus risus nec felis lobortis tincidunt. Pellentesque convallis turpis nibh, nec facilisis ' +
                'neque pellentesque ut. Vestibulum eleifend efficitur augue sit amet sollicitudin. Mauris quis libero.',
            pic: images['img1.png']
        },
        {
            title: 'Обучение SOFT-skills',
            description: 'В первую очередь мы стремимся раскрывать сильные стороны, и ближе знакомить ребят с мягкими' +
                ' или гибкими навыками, про которые не говорят в школе. Lorem ipsum dolor sit amet, consectetur ' +
                'adipiscing elit. Etiam commodo faucibus dolor a scelerisque. Aliquam dapibus risus nec felis ' +
                'lobortis tincidunt. Pellentesque convallis turpis nibh, nec facilisis neque pellentesque ut. ' +
                'Vestibulum eleifend efficitur augue sit amet sollicitudin. Mauris quis libero.',
            pic: images['img2.png']
        },
        {
            title: 'Активный отдых',
            description: 'В течение всего проекта у ребят будет много различных активностей, которые помогают им ' +
                'проявить свои таланты, научиться чему-то новому, выплеснуть энергию и получить заряд эмоций. ' +
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo faucibus dolor a ' +
                'scelerisque. Aliquam dapibus risus nec felis lobortis tincidunt. Pellentesque convallis turpis ' +
                'nibh, nec facilisis neque pellentesque ut. Vestibulum eleifend efficitur augue sit amet ' +
                'sollicitudin. Mauris quis libero.',
            pic: images['img3.png']
        },
        {
            title: 'Опытные кураторы',
            description: 'Отрядный (или куратор) постоянно находится рядом, помогает детям разрешать сложные ' +
                'ситуации, направляет их энергию в правильную сторону, даёт возможность каждому ребёнку быть ' +
                'услышанным. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo faucibus ' +
                'dolor a scelerisque. Aliquam dapibus risus nec felis lobortis tincidunt. Pellentesque convallis ' +
                'turpis nibh, nec facilisis neque pellentesque ut. Vestibulum eleifend efficitur augue sit amet ' +
                'sollicitudin. Mauris quis libero.',
            pic: images['img4.png']
        },
    ]

    return (
        <div>
            <NextProject/>
            <InfoLadder info={impulseInfo}/>
        </div>
    );
};

export default Impulse;