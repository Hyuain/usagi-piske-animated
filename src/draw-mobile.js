const style= `

@media (max-width: 500px) {
    .usagi-container {
        width: calc(0.7*270px);
        height: calc(0.7*190px);
        position: absolute;
        bottom: calc(0.7*0px);
        left: 50%;
        margin-left: calc(0.7*-230px);
        overflow: hidden;
    }
    .usagi {
        width: calc(0.7*270px);
        height: calc(0.7*250px);
        position: absolute;
        bottom: calc(0.7*-150px);
        right: 0;
        border: calc(0.7*8px) solid #512300;
        border-bottom: none;
        border-radius: calc(0.7*110px);
        background-color: #f5b4c0;
        transition: transform 0.5s;
    }
    .usagi .ear {
        border: calc(0.7*8px) solid #512300;
        height: calc(0.7*72px);
        width: calc(0.7*46px);
        background-color: #f5b4c0;
        position: absolute;
        border-bottom: none;
    }
    .usagi .ear.left {
        top: calc(0.7*-71px);
        left: 50%;
        margin-left: calc(0.7*-55px);
        transform: rotate(-3deg);
        border-top-left-radius: calc(0.7*37px) calc(0.7*75px);
        border-top-right-radius: calc(0.7*27px) calc(0.7*38px);
    }
    .usagi .ear.right {
        top: calc(0.7*-70px);
        left: 50%;
        margin-left: calc(0.7*17px);
        transform: rotate(6deg);
        border-top-left-radius: calc(0.7*26px) calc(0.7*40px);
        border-top-right-radius: calc(0.7*27px) calc(0.7*38px);
    }
    .usagi .ear.left::after, .usagi .ear.right::after {
        content: '';
        width: calc(0.7*29px);
        height: calc(0.7*10px);
        position: absolute;
        top: calc(0.7*58px);
        left: 1%;
        background-color: #f5b4c0;
    }
    .usagi .face {
        background-color: #fff;
        height: calc(0.7*100px);
        width: calc(0.7*64px);
        border-radius: 50%;
        position: absolute;
        top: calc(0.7*36px);
        left: 50%;
        margin-left: calc(0.7*-32px);
    }
    .usagi .eye::before, .usagi .eye::after {
        content: '';
        background-color: #512300;
        border-radius: 50%;
        width: calc(0.7*20px);
        height: calc(0.7*11px);
        position: absolute;
        top: calc(0.7*33px);
        left: 50%;
    }
    .usagi .eye::before {
        margin-left: calc(0.7*-40px);
        transform: rotate(-22deg);
    }
    .usagi .eye::after {
        margin-left: calc(0.7*20px);
        transform: rotate(22deg);
    }
    .usagi .nose {
        background-color: #512300;
        border-radius: 50%;
        width: calc(0.7*16px);
        height: calc(0.7*9px);
        position: absolute;
        top: calc(0.7*3px);
        left: 50%;
        margin-left: calc(0.7*-8px);
    }
    .usagi .nose::after {
        content: '';
        background-color: #512300;
        width: calc(0.7*8px);
        height: calc(0.7*19px);
        position: absolute;
        top: calc(0.7*3px);
        left: 50%;
        margin-left: calc(0.7*-4px);
    }
    .usagi .mouth.upper::before, .usagi .mouth.upper::after {
        content: '';
        border: calc(0.7*8px) solid #512300;
        border-top: none;
        border-radius: 50%;
        width: calc(0.7*24px);
        height: calc(0.7*23px);
        position: absolute;
        top: calc(0.7*13px);
        left: 50%;
        z-index: 1;
    }
    .usagi .mouth.upper::before {
        border-left: none;
        margin-left: calc(0.7*-20px);
        transform: rotate(25deg);
    }
    .usagi .mouth.upper::after {
        border-right: none;
        margin-left: calc(0.7*-4px);
        transform: rotate(-25deg);
    }
    .usagi .mouth.lower {
        border: calc(0.7*8px) solid #512300;
        background-color: #f5b4c0;
        width: calc(0.7*26px);
        height: calc(0.7*26px);
        position: absolute;
        top: calc(0.7*32px);
        left: 50%;
        margin-left: calc(0.7*-13px);
        border-top: none;
        border-radius: 0 0 50% 50%;
    }
    .usagi .flush::before {
        content: '';
        background-color: #f3a1ae;
        width: calc(0.7*53px);
        height: calc(0.7*37px);
        border-radius: 50%;
        position: absolute;
        top: calc(0.7*44px);
        left: 50%;
        margin-left: calc(0.7*-98px);
    }
    .usagi .flush::after {
        content: '';
        background-color: #f3a1ae;
        width: calc(0.7*53px);
        height: calc(0.7*37px);
        border-radius: 50%;
        position: absolute;
        top: calc(0.7*44px);
        left: 50%;
        margin-left: calc(0.7*45px);
    }
    .piske-container {
        width: calc(0.7*182px);
        height: calc(0.7*190px);
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: calc(0.7*40px);
        overflow: hidden;
    }
    .piske {
        border: calc(0.7*6px) solid #3f180d;
        background-color: #fff;
        width: calc(0.7*182px);
        height: calc(0.7*170px);
        position: absolute;
        left: 0;
        bottom: calc(0.7*-66px);
        border-bottom: none;
        border-radius: 50% 50% 0 0;
        transition: transform 0.5s;
    }
    .piske .eye::before, .piske .eye::after {
        content: '';
        background-color: #3f180d;
        border-radius: 50%;
        width: calc(0.7*12px);
        height: calc(0.7*12px);
        position: absolute;
        top: calc(0.7*45px);
        left: 50%;
    }
    .piske .eye::before {
        margin-left: calc(0.7*-32px);
    }
    .piske .eye::after {
        margin-left: calc(0.7*20px);
    }
    .piske .mouth::before, .piske .mouth::after {
        content: '';
        border: calc(0.7*6px) solid #3f180d;
        background-color: #fdd924;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .piske .mouth::before {
        width: calc(0.7*30px);
        height: calc(0.7*23px);
        border-radius: calc(0.7*30px);
        top: calc(0.7*35px);
    }
    .piske .mouth::after {
        width: calc(0.7*26px);
        height: calc(0.7*26px);
        border-radius: calc(0.7*30px);
        position: absolute;
        top: calc(0.7*54px);
    }
    .piske .flush::before, .piske .flush::after {
        content: '';
        background-color: #f3a1ae;
        width: calc(0.7*25px);
        height: calc(0.7*25px);
        border-radius: 50%;
        position: absolute;
        top: calc(0.7*55px);
        left: 50%;
    }
    .piske .flush::before {
        margin-left: calc(0.7*-64px);
    }
    .piske .flush::after {
        margin-left: calc(0.7*39px);
    }
    .usagi-container:hover>.usagi {
        transform: translateY(25%);
        transition: transform 0.5s;
    }
    .piske-container:hover>.piske {
        transform: translateY(24%);
        transition: transform 0.5s;
    }
}
`

export default style