import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'ガンマミィ・ジェネレーター',
  description: '例：「踊っているガンマミィ画像を生成して」「photo realistic 3d illustration of gammamy, dancing...」',
  copyright: 'BlendAI and AICU Inc.',
  privacy_policy: 'https://corp.aicu.ai/ja/privacy',
  default_language: 'ja',
}

export const isShowPrompt = false
export const promptTemplate = 'ガンマミィの可愛いイラストを生成して'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
