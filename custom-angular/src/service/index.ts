import { Rule, apply } from "@angular-devkit/schematics"
import { Tree } from "@angular-devkit/schematics/src/tree/interface"
import { SchematicContext } from "@angular-devkit/schematics"
import { mergeWith } from "@angular-devkit/schematics"
import { url } from "@angular-devkit/schematics"
import { template } from "@angular-devkit/schematics"
import { chain } from "@angular-devkit/schematics"
import { classify } from "@angular-devkit/core/src/utils/strings"
import { dasherize } from "@angular-devkit/core/src/utils/strings"
import { camelize } from "@angular-devkit/core/src/utils/strings"
import { Schema } from "./schema";

export default function (options: Schema): Rule {
  return chain([
    (t: Tree, c: SchematicContext) => {
      // options.classify = classify
      // options.dasherize = dasherize
      // options.camelize = camelize
      // options.path = options.path === 'app' ? 'src/app' : options.path

      c.logger.info(JSON.stringify(options));
    },
    mergeWith(apply(url('./files'), [
      template(Object.assign({
        classify,
        dasherize,
        camelize,
        path: options.location,
        name: options.name
      }))
    ]))
  ])
}
