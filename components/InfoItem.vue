<template>
  <div class="info-item">
      <div class="temp">{{ data.value}}<span>{{ data.unit}}</span></div>
      <div class="desc">{{ data.desc}}</div>
    </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss" scoped>
  .info-item {
    display: block;
    border: solid 1px #edeef1;
    border-radius: 10px;
    width: 25%;
    height: 70px;
    margin: 10px;
    align-content:center;
    object-position: center;
    text-align: left;

    .temp {
      color: #343434;
      margin: 17px 5px 5px 10px;
      font-size: 19px;
      span {
        font-size: 14px;
      }
    }
    .desc {
      margin: 5px 0 0 10px;
      font-size: 10px;
      color: #8a8a8a;
      line-height: 0%;
    }
  }
</style>