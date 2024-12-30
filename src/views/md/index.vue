<template>
  <div class="mjx-md-editor">
    <MdEditor v-model="Text" id="mjx-editor-md" height="600px" :toolbars="toolbars" @onHtmlChanged="onHtmlChanged"
      @onUploadImg="onUploadImg" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CustomContent from "./md-editor.js";
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const toolbars = ref([
  'bold',
  'underline',
  'italic',
  '-',
  'title',
  'strikeThrough',
  'unorderedList',
  'orderedList',
  'task',
  '-',
  'link',
  'image',
  '-',
  'revoke',
  'next',
]);
const Text = ref(`![](http://mmbiz.qpic.cn/mmbiz_png/yYUX4WEPworwdZbRkQEaYePVRfowVpicJH2wTuWo1N1dqBgaBqJtlJoMMF2TT6kDq5NIia0KqUYw4Yoq0JdSHYVg/0?wx_fmt=png)

老张在股市里摸爬滚打了好些年，一直没找到啥稳定赚钱的门道。有一天，他在网上看到一个高手分享的炒股经验，其中提到了“高量阴线战法”，这一下子就引起了老张的兴趣。老张心想，这会不会就是自己一直在寻找的股市秘籍呢？

其实啊，在股市这个充满挑战的战场上，很多像老张这样的股民都在苦苦寻觅有效的战法。今天，咱就来好好唠唠这个高量阴线战法，看看它到底有啥神奇之处，能不能帮助咱在股市里打个漂亮仗。

## 啥是高量阴线战法
所谓高量阴线战法，就是当股票价格上涨到一定阶段后，出现一根成交量特别大（也就是高量），同时收盘价低于开盘价的阴线。这就像是战场上突然出现的一个信号弹，告诉我们局势可能要发生变化了。
![](http://mmbiz.qpic.cn/mmbiz_jpg/yYUX4WEPwopCMnR5s5we5EKpwulzr17ecEL3TwticdBcTlMLmS2RwdQkCkpXw1XhXV3fo7rW5wwcL2icQxs3iaibSg/0?wx_fmt=jpeg)

比如说，你看那只股票一直涨啊涨，大家都兴高采烈地跟着买。突然有一天，成交量蹭地一下冲到了一个很高的水平，就像人群突然都涌到了一个地方，结果当天股价却跌了，收了根阴线。这时候，很多股民可能就懵了，不知道该咋办。其实啊，这就是高量阴线战法要关注的关键节点。

## 背后的秘密
这高量阴线为啥这么重要呢？这里面可大有学问。成交量大，说明当天买卖双方分歧特别大。就好比一场激烈的辩论赛，双方都争得面红耳赤，谁也不让谁。而阴线呢，表明在这场争斗中，卖方暂时占了上风，把价格给压下来了。

这时候，我们就得小心了。如果是在股票上涨了一段时间后出现这种情况，很可能是前期获利的人开始大量卖出，他们想把手里的股票变现，落袋为安。就像一群人在抢着挤公交车，车一到站，先上车的人就开始往下挤，想赶紧下车。这时候，车上的人越来越多，车就可能开不动了，股价也就面临着调整的压力。
![](http://mmbiz.qpic.cn/mmbiz_jpg/yYUX4WEPwopCMnR5s5we5EKpwulzr17eEKvqYBJV2zX8634bqBIFSfUvrtrDpesicfyzHhyvIEq1Rf2jXD1CtPQ/0?wx_fmt=jpeg)

## 怎么用它来实战
那我们在实战中该怎么运用这个高量阴线战法呢？

如果我们手里已经持有这只股票，当看到高量阴线出现时，就得冷静分析了。要是你觉得这只股票的基本面还是很不错，未来还有上涨的潜力，那可以先等等看，观察接下来几天股价的走势。如果股价能够在短时间内重新涨上去，把阴线的实体部分给收复了，那就说明多头又重新掌握了主动权，我们可以继续持有。但要是股价持续下跌，跌破了一些重要的支撑位，比如前期的低点或者均线系统，那可能就意味着趋势要反转了，这时候就得考虑及时止损，就像船要沉了，得赶紧跳船逃生一样。

要是我们还没有买入这只股票，看到高量阴线也别急着冲进去。可以把它加入自选股，观察一段时间。如果后续股价能够有效突破这根阴线的最高价，就像战士冲破了敌人的防线一样，那这时候可能就是一个不错的买入时机。但如果股价一直在阴线下方徘徊，那就说明压力还很大，我们就继续观望，等局势更明朗了再行动。
![](http://mmbiz.qpic.cn/mmbiz_jpg/yYUX4WEPwopCMnR5s5we5EKpwulzr17egMz1PJibWe3ThaEibAMxqqfcRxXuFRfVS6MUOwOYKuNannV2Chiauta6w/0?wx_fmt=jpeg)

当然，高量阴线战法也不是万能的，就像一把宝剑，虽然锋利，但也得看谁来用，怎么用。

我们要结合股票的整体走势来看。如果股票处于一个大的上升趋势中，偶尔出现一根高量阴线，可能只是上涨途中的一个小波折，就像跑步的时候不小心绊了一跤，很快就能站起来继续跑。但如果股票本身就处于下跌趋势，那这高量阴线可能就是雪上加霜，让股价跌得更惨。

要关注成交量的变化。如果高量阴线之后，成交量迅速萎缩，就像潮水退去一样，那可能股价调整的时间不会太长。但要是成交量一直居高不下，或者还在不断放大，那就说明市场还很不稳定，股价可能还会有较大的波动。
![](http://mmbiz.qpic.cn/mmbiz_png/yYUX4WEPwopCMnR5s5we5EKpwulzr17eP4PiaBiaicSb8CwHe46Nr7VZSh85eyXibr7DiaM850PSys73EgB0r9KlwqQ/0?wx_fmt=png)

最后，别忘了基本面的分析。股票的业绩、行业前景等基本面因素就像是房子的地基，如果地基不稳，再好的战法也可能不管用。比如说一家公司业绩亏损严重，就算出现了高量阴线战法中的买入信号，也得谨慎对待，毕竟基本面才是决定股票长期走势的关键因素。

在股市这个充满变数的战场上，高量阴线战法就像是我们的一件秘密武器。但我们要明白，没有一种战法能保证我们百战百胜。我们得不断学习，结合实际情况灵活运用各种知识和技巧，才能在股市里走得更稳，更远。就像航海一样，光有好的罗盘还不够，还得了解天气、水流等各种因素，才能顺利到达彼岸。所以啊，股民朋友们，让我们一起努力，在股市的海洋里乘风破浪吧！
![](http://mmbiz.qpic.cn/mmbiz_png/yYUX4WEPworwdZbRkQEaYePVRfowVpicJ3sbsRcjBLEVrtdEcwXoZKcpWtGicp7MHTJvPbTlic3dViawibiaUJCh2hGQ/0?wx_fmt=png)`)


const onUploadImg = async (files, callback) => {
  const res = await Promise.all(
    files.map((file) => {
      return new Promise((rev, rej) => {
        const form = new FormData();
        form.append('file', file);

        axios
          .post('/api/img/upload', form, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => rev(res))
          .catch((error) => rej(error));
      });
    })
  );

  callback(res.map((item) => item.data.url));
};

const onHtmlChanged = async (html) => {
  const previewElement = document.getElementById('mjx-editor-md-preview')
  previewElement.innerHTML = await CustomContent(html)
};

function loadCSS() {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/src/views/md/style/md-skin-143.min.css';
  document.head.appendChild(link);
}

// 在需要时调用
loadCSS();

</script>

<style lang="scss" scoped>
@use './style' as *;
</style>
