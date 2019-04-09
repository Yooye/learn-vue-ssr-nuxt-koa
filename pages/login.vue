<template>
    <div class="cont">
    <el-row type="flex" class="row-bg" justify="space-around" align="middle">
        <el-col :span="5">
            <div class="grid-content bg-purple-light">
                <div class="login-cont">
                    <el-input placeholder="请输入用户名" v-model="input3">
                        <template slot="prepend">用户名</template>
                    </el-input>

                    <el-input placeholder="请输入密码" v-model="input3">
                        <template slot="prepend">密&nbsp;&nbsp;  码</template>
                    </el-input>

                    <el-button type="primary" @click="register">注册</el-button>
                </div>
            </div>
        </el-col>
    </el-row>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: ''
    }
  },
  layout(){
      return 'login'
  },
  methods: {
    register(){
        axios.get('/register').then(function(res){
            console.log(res);
        })
    }
  },
}
</script>
<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .login-cont{
      height: 200px;
      margin-top: 300px;
      background: #FFF;
      border:1px solid #999;
      border-radius: 6px;
      padding: 20px;
  }
  .el-input{
      margin-bottom: 20px;
  }
  .el-button,
  .el-button span{
      display: block;
      width: 100%;
  }
</style>
