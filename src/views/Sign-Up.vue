<!--
	This is the sign up page, it uses the dashboard layout in:
	"./layouts/Default.vue" .
 -->

<template>
  <div>
    <div
      class="sign-up-header"
      style="background-image: url('images/bg-signup.jpg')"
    >
      <div class="content"></div>
    </div>

    <a-card :bordered="false" class="card-signup header-solid h-full mb-24">
      <template #title>
        <h6 class="font-semibold">Create a business</h6>
        <p>Register</p>
      </template>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-row type="flex" :gutter="[24, 24]" align="stretch">
          <!-- Project Column -->
          <a-col :span="24" :md="12" :xl="12">
            <a-form-item class="mb-10">
              <a-input
                v-decorator="[
                  'business_name',
                  {
                    rules: [
                      { required: true, message: 'Please input your name!' },
                    ],
                  },
                ]"
                placeholder="Business Name"
              >
              </a-input>
            </a-form-item>
            <a-form-item class="mb-10">
              <a-input
                v-decorator="[
                  'trading_name',
                  {
                    rules: [
                      { required: true, message: 'Please input your email!' },
                    ],
                  },
                ]"
                placeholder="Trading Name"
              >
              </a-input>
            </a-form-item>

            <a-form-item class="mb-5">
                <a-select placeholder="Business Type" @change="handleChange"
                v-for="(businessType, index) in businessTypeList" :key="index"
                v-decorator="[
                    'business_type_id',
                    {
                      rules: [
                        { required: true, message: 'Please input your email!' },
                      ],
                    },
                  ]">
                    <a-select-option :value="businessType.id" :key="businessType.id">
                      {{businessType.name}}
                    </a-select-option>
                  </a-select>
            </a-form-item>
            <a-form-item class="mb-5">
                <a-select placeholder="Business Sub Type"
                v-for="(businessSubType, index) in businessSubTypeList" :key="index"
                v-decorator="[
                    'business_sub_type_id',
                    {
                      rules: [
                        { required: true, message: 'Please input your email!' },
                      ],
                    },
                  ]">
                    <a-select-option :value="businessSubType.id" :key="businessSubType.id">
                      {{businessSubType.name}}
                    </a-select-option>

                  </a-select>
            </a-form-item>

            <a-form-item class="mb-5">
                <a-select placeholder="Business Category"
                v-for="(businessCategory, index) in businessCategoryList" :key="index"
                v-decorator="[
                    'business_category_id',
                    {
                      rules: [
                        { required: true, message: 'Please input your email!' },
                      ],
                    },
                  ]">
                    <a-select-option :value="businessCategory.id" :key="businessCategory.id">
                      {{businessCategory.name}}
                    </a-select-option>
                  </a-select>
            </a-form-item>
          </a-col>
          <!-- / Project Column -->

          <!-- Project Column -->
          <a-col :span="24" :md="12" :xl="12">
            <a-form-item class="mb-10">
              <a-input
                v-decorator="[
                  'first_name',
                  {
                    rules: [
                      { required: true, message: 'Please input your name!' },
                    ],
                  },
                ]"
                placeholder="First Name"
              >
              </a-input>
            </a-form-item>
            <a-form-item class="mb-10">
                <a-input
                  v-decorator="[
                    'last_name',
                    {
                      rules: [
                        { required: true, message: 'Please input your name!' },
                      ],
                    },
                  ]"
                  placeholder="Last Name"
                >
                </a-input>
              </a-form-item>
            <a-form-item class="mb-10">
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [
                      { required: true, message: 'Please input your email!' },
                    ],
                  },
                ]"
                placeholder="Email"
              >
              </a-input>
            </a-form-item>

            <a-form-item class="mb-10">
                <a-input
                  v-decorator="[
                    'phone_no',
                    {
                      rules: [
                        { required: true, message: 'Please input your email!' },
                      ],
                    },
                  ]"
                  placeholder="Phone Number"
                >
                </a-input>
              </a-form-item>
            <a-form-item>
              <a-button
                type="primary"
                block
                html-type="submit"
                class="login-form-button"
              >
                SIGN UP
              </a-button>
            </a-form-item>
          </a-col>
          <!-- / Project Column -->
        </a-row>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import { genericRequest } from "../services/CommonService.js";
export default {
  data() {
    return {
      businessTypeList: [],
      businessSubTypeList: [],
      businessCategoryList: [],
    };
  },
  beforeCreate() {
    // Creates the form and adds to it component's "form" property.
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
            values.status = "active"
            genericRequest("api/create-business", "post", false, values).then((response)=>{
            if(response.status){
                console.log(response);
                this.$router.push('/sign-in')
            }
        })
        }
      });
    },

    getBusinessTypes(){
        genericRequest("api/get-business-types", "get", false, {}).then((response)=>{
            if(response.status){
                this.businessTypeList = response.data;
            }
        })
    },
    getBusinessCategory(){
        genericRequest("api/get-business-category", "get", false, {}).then((response)=>{
            if(response.status){
                this.businessCategoryList = response.data;
            }
        })
    },
    getBusinessSubType(businessTypeId){
        genericRequest("api/get-business-sub-type/"+businessTypeId, "get", false, {}).then((response)=>{
            if(response.status){
                this.businessSubTypeList = response.data;
            }
        })
    },
    handleChange(id){
        this.getBusinessSubType(id);
    }

  },

  beforeMount(){
    this.getBusinessTypes()
    this.getBusinessCategory()
  }
};
</script>

<style lang="scss">
</style>
