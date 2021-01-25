import { Module } from 'vuex'
import { StateType } from '../../../../../@types/index'
const state = {
  teamName: '雪狼团队'
}
type TeamStateType = typeof state

const ModuleTeam: Module<TeamStateType, StateType> = {
  namespaced: true,
  ...state
}

export { TeamStateType, state }
export default ModuleTeam
