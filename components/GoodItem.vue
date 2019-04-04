<template>
    <div class="item">
            <div>
                <div class="item-img"><img alt="Smartisan 快充移动电源 10000mAh" :src="gData.stock_info[num].image" style="opacity: 1;">
                </div>
                <h6>{{gData.stock_info[num].title}}</h6>
                <h3 >{{gData.stock_info[num].sub_title}}</h3>
                <div class="params-colors">
                    <ul class="colors-list">
                        <li v-for="(stock,index) in gData.stock_info" :key="index">
                            <a 
                            href="javascript:;" 
                            :class="[index==num?'active':'']" 
                            :style="{background:stock.detail.color}" 
                            @click="change(index)"></a>
                        </li>
                    </ul>
                </div>
                <div class="item-btns clearfix">
                    <span class="item-gray-btn">
                        <router-link :to="'/detail/'+gIndex+'/'+num">
                            查看详情{{gIndex}} 
                        </router-link>
                    </span>
                    <span class="item-blue-btn" @click="add(gData.stock_info[num])">加入购物车 </span>
                </div>
                <div class="item-price clearfix">
                    <i>¥</i><span>{{gData.stock_info[num].price}}</span>
                </div>
                <div class="discount-icon">false</div>
                <div class="item-cover">
                    <a href="javascript:;" target="_blank"></a>
                </div>
            </div>
        </div>
</template>

<script>
// import goodsData from "../assets/js/goodsData";

export default {
    props: {
        gData: Object,
        gIndex: Number
    },
    data() {
        return {
            num: 0
        };
    },
    methods: {
        change(i) {
            this.num = i;
            console.log(i);
        },
        add(obj) {
            // this.$store.commit("plus");
            console.log(obj);
            // var _This = this;
            //
            this.$store.commit("addCartMut", obj);
        }
    }
};
</script>

<style scoped>
</style>