<template>
  <div class="list-wrap">
    <div class="avatar" v-for="p of members" :key="p.id">
      <a-avatar :src="p.avatar" :size="40" />
      <div class="p-role" :style="{ background: getRoleColor(p.roleId) }">
        {{ p.roleName ? p.roleName : '暂无角色' }}
      </div>
      <div class="p-name">
        {{ p.userId === userInfo.userId ? '我自己' : getFormmatName(p) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { getFormmatName } from '../utils/common'
import { BasicUserType, RoleType, StateType } from '../@types/index'
import { Color } from '@/config/color'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    members: {
      type: Array as PropType<BasicUserType[]>
    }
  },
  // 获取不同用户角色的背景颜色
  setup() {
    const store = useStore<StateType>()
    // 当前用户信息
    const userInfo = computed(() => store.state.user.userDetail)
    const getRoleColor = (roleId: number) => {
      if (roleId == RoleType['团队成员']) {
        return '#FF6060'
      }
      if (roleId == RoleType['团队管理员']) {
        return '#FFBE5B'
      }
      if (roleId == RoleType['团队超级管理员']) {
        return '#6096FF'
      }
      if (roleId === RoleType['团队访客']) {
        return Color.antd.primary
      }
    }
    return {
      getRoleColor,
      getFormmatName,
      userInfo
    }
  }
})
</script>

<style lang="less" scoped>
.list-wrap {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
}
.avatar:hover {
  background: #00a971;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.1);
  color: #fff;
}
// 分组
.avatar {
  width: 90px;
  height: 72px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 112px;
  height: 128px;
  background: #fff;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-right: 24px;
  margin-top: 10px;
  .p-name,
  .p-role {
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .p-name {
    margin: 5px;
  }
  .p-role {
    position: relative;
    top: -4px;
    font-size: 10px;
    background: #6096ff;
    color: #fff;
    padding: 0px 6px;
    border-radius: 10px;
  }
}
</style>
