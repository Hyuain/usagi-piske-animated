const style =
`/*
** 你好呀，现在我要画一幅
** 可爱的小兔 Usagi 和小鸟 Piske 
** 把他们送给你，希望你喜欢哦
*/

.usagi-container {
    width: 270px;
    height: 190px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -230px;
    overflow:hidden;
}

/*
** 我们先来画一下 Usagi 大头
*/

.usagi {
    border: 8px solid #512300;
    width: 270px;
    height: 250px;
    position: absolute;
    bottom: -150px;
    right: 0;
    border-bottom: none;
    border-radius: 110px;
    background-color: #f5b4c0;
    transition: transform 0.5s;
}

/*
** 再给她加上两只大耳朵
*/

.usagi .ear {
    border: 8px solid #512300;
    height: 72px;
    width: 46px;
    background-color: #f5b4c0;
    position: absolute;
    border-bottom: none;
}

.usagi .ear.left {
    top: -71px;
    left: 50%;
    margin-left: -55px;
    transform: rotate(-3deg);
    border-top-left-radius: 37px 75px;
    border-top-right-radius: 27px 38px;
}

.usagi .ear.right {
    top: -70px;
    left: 50%;
    margin-left: 17px;
    transform: rotate(6deg);
    border-top-left-radius: 26px 40px;
    border-top-right-radius: 27px 38px;
}

.usagi .ear.left::after,
.usagi .ear.right::after {
    content: '';
    width: 29px;
    height: 10px;
    position: absolute;
    top: 58px;
    left: 1%;
    background-color: #f5b4c0;
}

/*
** 再画一个白白的小脸
*/

.usagi .face {
    background-color: #fff;
    height: 100px;
    width: 64px;
    border-radius: 50%;
    position: absolute;
    top: 36px;
    left: 50%;
    margin-left: -32px;
}

/*
** 眼睛比较简单，先画一下眼睛吧~
*/

.usagi .eye::before,
.usagi .eye::after {
    content: '';
    background-color: #512300;
    border-radius: 50%;
    width: 20px;
    height: 11px;
    position: absolute;
    top: 33px;
    left: 50%;
}

.usagi .eye::before {
    margin-left: -40px;
    transform: rotate(-22deg);
}

.usagi .eye::after {
    margin-left: 20px;
    transform: rotate(22deg);
}

/*
** 然后画鼻子
*/

.usagi .nose {
    background-color: #512300;
    border-radius: 50%;
    width: 16px;
    height: 9px;
    position: absolute;
    top: 3px;
    left: 50%;
    margin-left: -8px;
}

.usagi .nose::after {
    content: '';
    background-color: #512300;
    width: 8px;
    height: 19px;
    position: absolute;
    top: 3px;
    left: 50%;
    margin-left: -4px;
}

/*
** 然后是加上嘴巴
*/

.usagi .mouth.upper::before,
.usagi .mouth.upper::after {
    content: '';
    border: 8px solid #512300;
    border-top: none;
    border-radius: 50%;
    width: 24px;
    height: 23px;
    position: absolute;
    top: 13px;
    left: 50%;
    z-index: 1;
}

.usagi .mouth.upper::before {
    border-left: none;
    margin-left: -20px;
    transform: rotate(25deg);
}

.usagi .mouth.upper::after {
    border-right: none;
    margin-left: -4px;
    transform: rotate(-25deg);
}

.usagi .mouth.lower {
    border: 8px solid #512300;
    background-color: #f5b4c0;
    width: 26px;
    height: 26px;
    position: absolute;
    top: 32px;
    left: 50%;
    margin-left: -13px;
    border-top: none;
    border-radius: 0 0 50% 50%;
}

/*
** 最后抹上腮红，Usagi 就完成啦~
*/

.usagi .flush::before,
.usagi .flush::after {
    content: '';
    background-color: #f3a1ae;
    width: 53px;
    height: 37px;
    border-radius: 50%;
    position: absolute;
    top: 44px;
    left: 50%;
}

.usagi .flush::before {
    margin-left: -98px;
}

.usagi .flush::after {
    margin-left: 45px;
}

/*
** 那我们接着来画 Piske 咯
*/

.piske-container {
    width: 182px;
    height: 190px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: 40px;
    overflow:hidden;
}

.piske {
    border: 6px solid #3f180d;
    background-color: #fff;
    width: 182px;
    height: 170px;
    position: absolute;
    left: 0;
    bottom: -66px;
    border-bottom: none;
    border-radius: 50% 50% 0 0;
    transition: transform 0.5s;
}

/*
** Piske 的眼睛更圆一些，少了几分慵懒
*/

.piske .eye::before,
.piske .eye::after {
    content: '';
    background-color: #3f180d;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 45px;
    left: 50%;
}

.piske .eye::before {
    margin-left: -32px;
}

.piske .eye::after {
    margin-left: 20px;
}

/*
** 接着是 Piske 的灵魂
*/

.piske .mouth::before,
.piske .mouth::after {
    content: '';
    border: 6px solid #3f180d;
    background-color: #fdd924;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.piske .mouth::before {
    width: 30px;
    height: 23px;
    border-radius: 30px;
    top: 35px;
}

.piske .mouth::after {
    width: 26px;
    height: 26px;
    border-radius: 30px;
    position: absolute;
    top: 54px;
}

/*
** 同样给他也加上腮红
*/

.piske .flush::before,
.piske .flush::after {
    content: '';
    background-color: #f3a1ae;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: 55px;
    left: 50%;
}

.piske .flush::before {
    margin-left: -64px;
}

.piske .flush::after {
    margin-left: 39px;
}

/*
** 摸一下他们就会害羞地躲起来
*/

.usagi-container:hover>.usagi {
    transform: translateY(25%);
    transition: transform 0.5s;
}

.piske-container:hover>.piske {
    transform: translateY(24%);
    transition: transform 0.5s;
}

/*
** 最后我们让手机上也能容纳下他俩的大头
** 这一步在大屏设备上看没有变化哦
**
** 这样我们就画完啦，不知道你喜欢吗
** 我们下次再见啦，拜拜~
*/`

export default style