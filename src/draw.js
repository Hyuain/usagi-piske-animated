const style =
`/*
** 你好呀，现在我要画一幅
** 可爱的小兔 Usagi 和小鸟 Piske 
** 把他们送给你，希望你喜欢哦
*/

.usagi-container {
  width: 27rem;
  height: 19rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -23rem;
  overflow:hidden;
}

/*
** 我们先来画一下 Usagi 大头
*/

.usagi {
  border: .8rem solid #512300;
  width: 27rem;
  height: 25rem;
  position: absolute;
  bottom: -15rem;
  right: 0;
  border-bottom: none;
  border-radius: 11rem;
  background-color: #f5b4c0;
  transition: transform 0.5s;
}

/*
** 再给她加上两只大耳朵
*/

.usagi .ear {
  border: .8rem solid #512300;
  height: 7.2rem;
  width: 4.6rem;
  background-color: #f5b4c0;
  position: absolute;
  border-bottom: none;
}

.usagi .ear.left {
  top: -7.1rem;
  left: 50%;
  margin-left: -5.5rem;
  transform: rotate(-3deg);
  border-top-left-radius: 3.7rem 7.5rem;
  border-top-right-radius: 2.7rem 3.8rem;
}

.usagi .ear.right {
  top: -7rem;
  left: 50%;
  margin-left: 1.7rem;
  transform: rotate(6deg);
  border-top-left-radius: 2.6rem 4rem;
  border-top-right-radius: 2.7rem 3.8rem;
}

.usagi .ear.left::after,
.usagi .ear.right::after {
  content: '';
  width: 2.9rem;
  height: 1rem;
  position: absolute;
  top: 5.8rem;
  left: 1%;
  background-color: #f5b4c0;
}

/*
** 再画一个白白的小脸
*/

.usagi .face {
  background-color: #fff;
  height: 10rem;
  width: 6.4rem;
  border-radius: 50%;
  position: absolute;
  top: 3.6rem;
  left: 50%;
  margin-left: -3.2rem;
}

/*
** 眼睛比较简单，先画一下眼睛吧~
*/

.usagi .eye::before,
.usagi .eye::after {
  content: '';
  background-color: #512300;
  border-radius: 50%;
  width: 2rem;
  height: 1.1rem;
  position: absolute;
  top: 3.3rem;
  left: 50%;
}

.usagi .eye::before {
  margin-left: -4rem;
  transform: rotate(-22deg);
}

.usagi .eye::after {
  margin-left: 2rem;
  transform: rotate(22deg);
}

/*
** 然后画鼻子
*/

.usagi .nose {
  background-color: #512300;
  border-radius: 50%;
  width: 1.6rem;
  height: .9rem;
  position: absolute;
  top: .3rem;
  left: 50%;
  margin-left: -.8rem;
}

.usagi .nose::after {
  content: '';
  background-color: #512300;
  width: .8rem;
  height: 1.9rem;
  position: absolute;
  top: .3rem;
  left: 50%;
  margin-left: -.4rem;
}

/*
** 然后是加上嘴巴
*/

.usagi .mouth.upper::before,
.usagi .mouth.upper::after {
  content: '';
  border: .8rem solid #512300;
  border-top: none;
  border-radius: 50%;
  width: 2.4rem;
  height: 2.3rem;
  position: absolute;
  top: 1.3rem;
  left: 50%;
  z-index: 1;
}

.usagi .mouth.upper::before {
  border-left: none;
  margin-left: -2rem;
  transform: rotate(25deg);
}

.usagi .mouth.upper::after {
  border-right: none;
  margin-left: -.4rem;
  transform: rotate(-25deg);
}

.usagi .mouth.lower {
  border: .8rem solid #512300;
  background-color: #f5b4c0;
  width: 2.6rem;
  height: 2.6rem;
  position: absolute;
  top: 3.2rem;
  left: 50%;
  margin-left: -1.3rem;
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
  width: 5.3rem;
  height: 3.7rem;
  border-radius: 50%;
  position: absolute;
  top: 4.4rem;
  left: 50%;
}

.usagi .flush::before {
  margin-left: -9.8rem;
}

.usagi .flush::after {
  margin-left: 4.5rem;
}

/*
** 那我们接着来画 Piske 咯
*/

.piske-container {
  width: 18.2rem;
  height: 19rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: 4rem;
  overflow:hidden;
}

.piske {
  border: .6rem solid #3f180d;
  background-color: #fff;
  width: 18.2rem;
  height: 17rem;
  position: absolute;
  left: 0;
  bottom: -6.6rem;
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
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 4.5rem;
  left: 50%;
}

.piske .eye::before {
  margin-left: -3.2rem;
}

.piske .eye::after {
  margin-left: 2rem;
}

/*
** 接着是 Piske 的灵魂
*/

.piske .mouth::before,
.piske .mouth::after {
  content: '';
  border: .6rem solid #3f180d;
  background-color: #fdd924;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.piske .mouth::before {
  width: 3rem;
  height: 2.3rem;
  border-radius: 3rem;
  top: 3.5rem;
}

.piske .mouth::after {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 3rem;
  position: absolute;
  top: 5.4rem;
}

/*
** 同样给他也加上腮红
*/

.piske .flush::before,
.piske .flush::after {
  content: '';
  background-color: #f3a1ae;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  top: 5.5rem;
  left: 50%;
}

.piske .flush::before {
  margin-left: -6.4rem;
}

.piske .flush::after {
  margin-left: 3.9rem;
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
** 这样我们就画完啦，不知道你喜欢吗
** 我们下次再见啦，拜拜~
*/`

export default style