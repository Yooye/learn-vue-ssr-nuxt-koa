<template>
  <div id="main">
			<div class="sku-box store-content">
				<div class="sort-option">
					<ul class="line clear">
						<li><a href="javascript:;" class="active">综合排序</a></li>
						<li><a href="javascript:;" class="">销量排序</a></li>
						<li><a href="javascript:;" class="">价格低到高</a></li>
						<li><a href="javascript:;" class="">价格高到低</a></li>
					</ul>
				</div>
				<div class="gray-box">
					<div class="item-box">
						<good-item v-for="(item,index) in goodsData" :key="index" :g-data="item" :g-index="index"></good-item>
					</div>
				</div>
			</div>
		</div>

</template>

<script>
import '@/assets/css/goodsList.css'
import GoodItem from '@/components/GoodItem'
import goodsData from "@/assets/js/goodsData";
export default {
  data() {
	  return {
		  goodsData
	  }
  },
  components: {
	  goodItem:GoodItem
  }
}
</script>

<style>

</style>
