import type { StorageMounts } from 'nitropack'
import type { NuxtError } from '#app'
import type { EncryptAlgorithm } from './runtime/server/utils/uncsrf'
import type { HTTPMethod } from 'h3'

export interface ModuleOptions {
  https?: boolean
  cookieKey?: string
  encrypt:{
    secret?: Buffer
    algorithm?: EncryptAlgorithm
  },
	storage: StorageMounts[string]
}

type CsrfRules = {
	methods?:HTTPMethod[]
	error?: NuxtError
} | false

declare module 'nitropack' {
	interface NitroRouteRules {
		uncsrf?:CsrfRules
	}
	interface NitroRouteConfig {
		uncsrf?:CsrfRules
	}
}

export interface ModuleRuntimeConfig {
  uncsrf?:ModuleOptions
}

