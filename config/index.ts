import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.APP_ID}`
export const API_KEY = `${process.env.API_KEY}`
export const API_URL = `${process.env.API_URL}`
export const Token = `${process.env.token}`
export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
