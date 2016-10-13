//optionデータ
const optionList = {
  0: { value: 0, text: '選択してください' },
  150: { value: 150, text: '150円以上' },
  200: { value: 200, text: '200円以上' },
  300: { value: 300, text: '300円以上' }
}

//寿司データ
const sushiList = [
  { price: 100, name: 'まぐろ', cal:52 },
  { price: 150, name: 'かんぱち', cal:41 },
  { price: 100, name: 'サーモン', cal:32 },
  { price: 80, name: 'たまご', cal:45 },
  { price: 200, name: 'つぶがい', cal:30 },
  { price: 400, name: 'うに', cal:50 },
  { price: 300, name: 'いくら', cal:65 },
  { price: 300, name: 'えび', cal:50 },
  { price: 1000, name: 'あわび', cal:50 }
]

//app
const app = new Vue({
  el: '#app',
  data: {
    selected: '0',
    options: optionList,
    sushis : sushiList
  },
  computed: {
    filterSushis: function(){ //sushisを値段でフィルタ
      let val = this.selected
      return this.sushis.filter(function(sushi){
        return sushi.price >= val;
      })
    },
    totalPrice: function(){ //合計金額
      return this.filterSushis.reduce(function(prev, current){
        return prev + current.price;
      },0)
    },
    totalCal: function(){ //合計カロリー
      return this.filterSushis.reduce(function(prev, current){
        return prev + current.cal;
      },0)
    }
  }
})