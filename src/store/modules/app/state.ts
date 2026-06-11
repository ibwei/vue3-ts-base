const state = {
  language: 'zhCN',
  theme: 'light',
  version: '0.0.1',
  fullLoading: false,
  loadingText: 'Loading...',
  currentActiveNav: '解决方案'
}
type AppStateType = typeof state

export { AppStateType, state }
export default state
