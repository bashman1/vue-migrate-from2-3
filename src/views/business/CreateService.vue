<template>
  <div>
    <a-card :bordered="false" class="dashboard-bar-line header-solid">
      <template #title>
        <h6 class="font-semibold">Create a service</h6>
        <!-- <p></p> -->
      </template>
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
        :hideRequiredMark="true"
      >
        <a-col :span="24" :md="8" :xl="8">
          <a-form-item class="mb-10 mr-10">
            <a-input
              v-decorator="[
                'service_name',
                {
                  rules: [
                    { required: true, message: 'Please input your name!' },
                  ],
                },
              ]"
              placeholder="Service Name"
            >
            </a-input>
          </a-form-item>
          <!-- <a-form-item class="mb-10 mr-10">
            <a-input
              v-decorator="[
                'service_name',
                {
                    rules: [
                      { required: true, message: 'Please input your email!' },
                    ],
                  },
              ]"
              placeholder="Service Name"
            ></a-input>
          </a-form-item> -->

          <a-form-item class="mb-10 mr-10">
            <a-select
              @change="serviceCategoryChange"
              placeholder="Service Category"
              v-decorator="[
                'service_category_id',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
            >
              <a-select-option
                v-for="(serviceCategory, index) in ServiceCategories"
                :key="index"
                :value="serviceCategory.id"
              >
                {{ serviceCategory.name }}
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item class="mb-10 mr-10">
            <a-select
              placeholder="Payment Method"
              v-decorator="[
                'payment_method',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
            >
              <a-select-option
                v-for="(payMth, index) in paymentsMethods"
                :key="index"
                :value="payMth.id"
              >
                {{ payMth.name }}
              </a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item class="mb-10 mr-10">
            <a-textarea
              v-decorator="[
                'service_description',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
              placeholder="Service Description"
            ></a-textarea>
          </a-form-item>
        </a-col>
        <a-col :span="24" :md="8" :xl="8">
          <a-form-item class="mb-10 mr-10">
            <a-input
              v-decorator="[
                'service_sub_name',
                {
                  rules: [
                    { required: true, message: 'Please input your name!' },
                  ],
                },
              ]"
              placeholder="Service Sub Name"
            >
            </a-input>
          </a-form-item>
          <a-form-item class="mb-10 mr-10">
            <a-select
              placeholder="Service Sub Category"
              v-decorator="[
                'service_sub_category_id',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
            >
              <a-select-option
                v-for="(serviceSubCategory, index) in ServiceSubCategories"
                :key="index"
                :value="serviceSubCategory.id"
              >
                {{ serviceSubCategory.name }}
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item class="mb-10 mr-10">
            <a-input
              v-decorator="[
                'target_customer',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
              placeholder="Target Customer"
            ></a-input>
          </a-form-item>
          <a-form-item class="mb-10 mr-10">
            <a-textarea
              v-decorator="[
                'description',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
              placeholder="Sub Service Description"
            ></a-textarea>
          </a-form-item>
        </a-col>
        <a-col :span="24" :md="8" :xl="8">
          <a-form-item class="mb-10 mr-10">
            <a-input
              v-decorator="[
                'experience',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
              placeholder="Business Experience"
            ></a-input>
          </a-form-item>

          <a-form-item class="mb-10 mr-10">
            <!-- <template slot="editBtn"> -->
            <a-button type="dashed" block @click="$refs.file.click()">
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 17C3 16.41gKFtogHYuTLgtmff2zbx9hk7DWS8VB612gDjf1YFPsfT66jV4UFCBNJSsUKKBpwf9y4CunA1UoucxSkm8NLtmRFxDFATc17.5523 3 17ZM6.29289 6.70711C5.90237 6.31658 5.90237 5.68342 6.29289 5.29289L9.29289 2.29289C9.41gKFtogHYuTLgtmff2zbx9hk7DWS8VB612gDjf1YFPsfT66jV4UFCBNJSsUKKBpwf9y4CunA1UoucxSkm8NLtmRFxDFATc5.68342 14.0976 6.31658 13.7071 6.70711C13.3166 7.09763 12.6834 7.09763 12.2929 6.70711L11 5.41421L11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13L9 5.41421L7.70711 6.70711C7.31658 7.09763 6.68342 7.09763 6.29289 6.70711Z"
                  fill="#111827"
                />
              </svg>
              Upload Service Logo
            </a-button>

            <input type="file" ref="file" style="display: none" />
            <!-- </template> -->

            <!-- <a-input
              type="file"
              hidden
              v-decorator="[
                'service_logo',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
              placeholder="Service Name"
            ></a-input> -->
          </a-form-item>

          <a-form-item class="mb-10 mr-10">
            <a-textarea
              v-decorator="[
                'terms_and_conditions',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
              placeholder="Service Terms and Conditions"
            ></a-textarea>
          </a-form-item>
        </a-col>

        <!-- for pricing  -->
        <div v-for="(price, index) in pricesList" :key="index">
          <a-col :span="24" :md="24" :xl="24"></a-col>
          <a-col :span="24" :md="6" :xl="6">
            <a-form-item class="mb-10 mr-10">
              <a-select
                @change="onPriceChange($event, 'type', price)"
                placeholder="Select Service Type"
              >
                <a-select-option value="service">Service </a-select-option>
                <a-select-option value="sub_service"
                  >Sub Service
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="5" :xl="5">
            <a-form-item class="mb-10 mr-10">
              <a-select
                placeholder="Select Quantity"
                @change="onPriceChange($event, 'quantity', price)"
              >
                <a-select-option
                  v-for="(serviceQty, index) in ServiceQuantities"
                  :key="index"
                  :value="serviceQty.id"
                  >{{ serviceQty.name }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="5" :xl="5">
            <a-form-item class="mb-10 mr-10">
              <a-input
                placeholder="Price"
                @change="onPriceChange($event, 'price', price)"
              ></a-input>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="6" :xl="6">
            <a-form-item class="mb-10 mr-10">
              <a-checkbox  @change="onPriceChange($event, 'negotiable', price)">
                Is the price negotiable?
              </a-checkbox>
            </a-form-item>
          </a-col>
          <a-col :span="24" :md="2" :xl="2">
            <a-form-item class="mb-10 mr-10">
              <a-button
                type="primary"
                block
                html-type="button"
                class="login-form-button"
                @click="addPriceLayer(price)"
              >
                ADD
              </a-button>
            </a-form-item>
          </a-col>
        </div>
        <!-- /for pricing -->

        <!-- for countries and location -->
        <a-col :span="24" :md="24" :xl="24"></a-col>

        <a-col :span="24" :md="11" :xl="11">
          <a-form-item class="mb-10 mr-10">
            <a-select
              placeholder="Select Country"
              v-decorator="[
                'service_countries',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
            >
              <a-select-option value="day">Days </a-select-option>
              <a-select-option value="week">Weeks </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="24" :md="11" :xl="11">
          <a-form-item class="mb-10 mr-10">
            <a-input
              v-decorator="[
                'service_location',
                {
                  rules: [
                    { required: true, message: 'Please input your email!' },
                  ],
                },
              ]"
              placeholder="Location"
            ></a-input>
          </a-form-item>
        </a-col>
        <a-col :span="24" :md="2" :xl="2">
          <a-form-item class="mb-10 mr-10">
            <a-button
              type="primary"
              block
              html-type="button"
              class="login-form-button"
            >
              ADD
            </a-button>
          </a-form-item>
        </a-col>
        <a-col :span="24" :md="16" :xl="16">
          <a-form-item class="mb-10 mr-10">
            <a-checkbox @change="onChange">
              I accept term and conditions
            </a-checkbox>
          </a-form-item>
        </a-col>
        <a-col :span="24" :md="8" :xl="8">
          <a-form-item>
            <a-button
              type="primary"
              block
              html-type="submit"
              class="login-form-button"
            >
              Submit
            </a-button>
          </a-form-item>
        </a-col>
        <!-- /for countries and location -->
      </a-form>
    </a-card>
  </div>
</template>


<script>
import {
  ValidationMessage,
  genericRequest,
  updateOrPushObjectByParam,
} from "../../services/CommonService.js";
export default {
  data() {
    return {
      serviceLogo: "",
      productLogo: "",
      //   rules: ValidationMessage(),
      paymentsMethods: [],
      ServiceCategories: [],
      ServiceSubCategories: [],
      ServiceQuantities: [],
      pricesList: [1],
      selectedPrices: [],
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
        console.log(values);
        if (!err) {
          //     values.status = "active"
          //     genericRequest("api/create-business", "post", false, values).then((response)=>{
          //     if(response.status){
          //         console.log(response);
          //         this.$router.push('/sign-in')  get-payment-methods
          //     }
          // })
        }
      });
    },

    getPaymentMethods() {
      genericRequest("api/get-payment-methods", "get", false, {}).then(
        (response) => {
          if (response.status) {
            this.paymentsMethods = response.data;
          }
        }
      );
    },

    getServiceCategories() {
      genericRequest("api/get-service-categories", "get", false, {}).then(
        (response) => {
          if (response.status) {
            this.ServiceCategories = response.data;
          }
        }
      );
    },

    getServiceSubCategories(serviceCategoryId) {
      genericRequest(
        "api/get-service-sub-categories/" + serviceCategoryId,
        "get",
        false,
        {}
      ).then((response) => {
        if (response.status) {
          this.ServiceSubCategories = response.data;
        }
      });
    },
    serviceCategoryChange(id) {
      this.getServiceSubCategories(id);
    },
    getServiceQuantities() {
      genericRequest("api/get-service-quantities", "get", false, {}).then(
        (response) => {
          if (response.status) {
            this.ServiceQuantities = response.data;
          }
        }
      );
    },
    onChange(event) {},
    addPriceLayer(price) {
      this.pricesList.push(price + 1);
    },

    onPriceChange(event, type, id) {
      if (type == "type") {
        let  value ={ id: id, service_type: event };
        console.log(value);
        this.selectedPrices = updateOrPushObjectByParam(
          this.selectedPrices,
          "id",
          id,
          "service_type",
          value
        );
      } else if (type == "quantity") {
        this.selectedPrices = updateOrPushObjectByParam(
          this.selectedPrices,
          "id",
          id,
          "quantity",
          { id: id, quantity: event }
        );

        // this.selectedPrices = this.selectedPrices.map(item => Vue.toRaw(item))

        // this.selectedPrices.push({
        //   id: id,
        //   quantity: event,
        // });
      } else if (type == "price") {
        this.selectedPrices = updateOrPushObjectByParam(
          this.selectedPrices,
          "id",
          id,
          "price",
          { id: id, price:  event.target.value }
        );
        this.selectedPrices.push();
      } else if (type == "negotiable") {
        this.selectedPrices = updateOrPushObjectByParam(
          this.selectedPrices,
          "id",
          id,
          "negotiable",
          { id: id, negotiable:  event.target.checked }
        ).then((data)=>{
            console.log(data)
        });

        // this.selectedPrices.push({
        //   id: id,
        //   negotiable: event.target.checked,
        // });
      }
      console.log(this.selectedPrices);
    },
  },

  beforeMount() {
    this.getPaymentMethods();
    this.getServiceCategories();
    this.getServiceQuantities();
  },
};
</script>

<style lang="scss">
</style>
