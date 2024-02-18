function getGraphemeClusters(text, count = 100) {
  // let segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
  let segmenter = new Intl.Segmenter(undefined, { granularity: 'word' });
  let segments = segmenter.segment(text);

  let clusterArray = [];
  for (let { segment } of segments) {
    if (segment.trim()) {
      clusterArray.push(segment);
    }

    if (clusterArray.length === count) {
      break;
    }
  }

  return clusterArray;
}
const testStr1 =
  "Once upon a time in a broad, beautiful valley, lived a very peculiar rabbit. He didn't run around or munch on carrots like ordinary rabbits, instead, he preferred to observe the world, often in thoughtful silence. He loved the comforting warmth of the rising sun, the crisp autumn leaves falling gently from the trees, and the serene blanket of white during the winter's first snow. He found joy in listening to the melodious chirping of the birds and the hum of the bees. He was fascinated by the changing seasons, the contours of the nearby mountain, and the ebbs and flows of the river that cut through the valley. Every day, from the break of dawn to dusk, he cultivated a deep connection with nature. He existed not merely as a spectator but as an integral part of the grand design, understanding that each element in nature has its unique purpose and place. This, to him, was the essence of life - not a series of ordinary events but a harmonious symphony of extraordinary moments";
const testStr2 =
  'ขอโทษที่นำเสนอวางใจให้คุณด้วยความยินดีว่าฉันรู้สึกเศร้ามากว่าเสมอกับความหวังใหม่ในชีวิตที่จะทำให้ฉันตื่นขึ้นตระหนักถึงความคิดที่ซับซ้อนในนาทีที่ฉันต้องพบคนที่ฉันรักเธอคงจะยิ้มหยิบมือฉันอย่างอบอุ่นแล้วให้เสียงเชียร์ที่มีความอารมณ์กว้างขวางพร้อมความทรงจำที่คึกคักแย้งกับสถานที่ที่เฉื่อยชาและสิ่งที่มุ่งหวังเธอต้องมองหาบางสิ่งแล้วอินทิราลิตันที่หัวใจของมนุษย์ควรที่จะท้าทายตัวเองถ้าคุณไม่ยอมรับคุณจะต้องแสดงเป็นคนที่คุณวิ่งเข้าถึงนำไปสู่ความสำสักที่เร้าจิตวิญญาณในวันที่คุณเติบโตบนความเชื่อในความฝันที่คุณบรรลุ.';
const testStr3 =
  'Once upon a time in a broad, beautiful valley，我是一只小小的兔子，我有一只小小的兔子，我有一只小小的兔子，我有一只小小的兔子，我有一只小小的兔子，我有一只小小的兔子，我有一只小小的子，我有一只小小的兔子，我有一只小小的兔子,我有一只小小的兔子,我有一只小小的兔子';
// const res = getGraphemeClusters(testStr3);
// console.log(res.length);
// console.log(res);
// 一个一个字符打印testStr2
