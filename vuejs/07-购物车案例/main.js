const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        name: '《算法导论》',
        time: '2006-9',
        price: 85.00,
        count: 1,
      },
      {
        name: '《UNIX编程艺术》',
        time: '2006-2',
        price: 59.00,
        count: 1,
      },
      {
        name: '《计算机原理》',
        time: '2008-10',
        price: 39.00,
        count: 1,
      },
      {
        name: '《代码大全》',
        time: '2006-3',
        price: 128.00,
        count: 1,
      }
    ]
  },
  methods: {
    add(index){
      this.books[index].count++;
    },
    sub(index){
      this.books[index].count--;
    },
    remove(index){
      this.books.splice(index,1);
    }
  },
  computed: {
    priceSum(){
      let sum = 0;
      for (let i of this.books){
        sum += i.price;
      };
      return sum;
    }
  },
  filters: {
    getPrice(price){
      // toFixed(num) 表示保留num个小数点
      return '¥' + price.toFixed(2);
    }
  }
})