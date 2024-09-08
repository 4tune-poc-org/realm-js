import path from "node:path"
import process from "node:process"

import {
	searchForConfigFile,
	generateRuntimeData,
	rollupPlugin
} from "@4tune-poc/realm-js-and-web-base"

import {
	initializeRuntimeFromData
} from "@4tune-poc/realm-js-and-web-base/runtime"

const project_root = await searchForConfigFile(path.dirname(process.argv[1]))

const runtime_data = await generateRuntimeData(
	project_root,
	await rollupPlugin(project_root)
)

const runtime = await initializeRuntimeFromData(runtime_data)

export function getRuntimeVersion(...args) { return runtime.getRuntimeVersion(...args); }
export function loadResource(...args) { return runtime.loadResource(...args); }
export function loadProjectPackageJSON(...args) { return runtime.loadProjectPackageJSON(...args); }
export function loadFortuneConfiguration(...args) { return runtime.loadFortuneConfiguration(...args); }
export function createDefaultContext(...args) { return runtime.createDefaultContext(...args); }
export default runtime;
