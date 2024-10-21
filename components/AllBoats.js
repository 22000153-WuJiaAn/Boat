import React from 'react';
import {ScrollView} from 'react-native';
import Boat from './Boat';

const AllBoats= () => {
    return (
        <ScrollView>
            <Boat title="SEA RAY 500 SUNDANCER"
                  year="Contoured lines and dramatic styling reveal a refined and poweful presence that will tkae your breath away"
                  icon_name="sait-boat"
                  poster={require('../img/sea_ray.jpg')}/>
            <Boat
                title="FOUR WINNS HORIZON 180"
                year="A sporty look and refined details truly set the Horizon 180 above others"
                icon_name="sait-boat"
                poster={require('../img/four_winns.jpg')}/>
            <Boat
                title="FLIPPER 640 ST"
                year="A modern take on the classic, traditional hardtop and perfect for a day out"
                icon_name="sait-boat"
                poster={require('../img/four_winns.jpg')}/>
            <Boat
                title="FAIRLINE 1000 "
                year="The fairness boat, in price, efficiency and speed. Best price!"
                icon_name="sait-boat"
                poster={require('../img/fairline.jpg')}/>
            <Boat
                title="Princess 9000"
                year="Bow down to this princess boat as it speeds through the sea like god"
                icon_name="sait-boat"
                poster={require('../img/princess.jpg')}/>
            <Boat
                title="BAYLINER SPD"
                year="The boat that can fly in air and sea"
                icon_name="sait-boat"
                poster={require('../img/bayliner.jpg')}/>

        </ScrollView>
    )

}
    export default AllBoats;
