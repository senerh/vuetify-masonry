<script lang="ts" setup generic="T">
import { computed, type ComputedRef } from 'vue'
import { useDisplay } from 'vuetify'
import { VRow, VCol } from 'vuetify/components'

export type NbMasonryColumns = 1 | 2 | 3 | 4 | 6 | 12
export type ColProp = NbMasonryColumns | `${NbMasonryColumns}`

const props = withDefaults(
  defineProps<{
    col?: ColProp
    items?: T[]
    xs?: ColProp
    sm?: ColProp
    md?: ColProp
    lg?: ColProp
    xl?: ColProp
    xxl?: ColProp
  }>(),
  { items: () => [] as T[] },
)

const {
  xs: xsAndUp,
  smAndUp,
  mdAndUp,
  lgAndUp,
  xlAndUp,
  xxl: xxlAndUp,
} = useDisplay()

const nbColumns: ComputedRef<NbMasonryColumns> = computed(() => {
  const coerce = (v: ColProp | undefined): NbMasonryColumns | undefined => {
    if (v === undefined) return undefined
    return (
      typeof v === 'string' ? (Number(v) as NbMasonryColumns) : v
    ) as NbMasonryColumns
  }

  const resolve = (...vals: Array<ColProp | undefined>): NbMasonryColumns => {
    for (const v of vals) {
      const c = coerce(v)
      if (c !== undefined) return c
    }
    return 1
  }

  if (xxlAndUp.value)
    return resolve(
      props.xxl,
      props.xl,
      props.lg,
      props.md,
      props.sm,
      props.xs,
      props.col,
    )
  if (xlAndUp.value)
    return resolve(props.xl, props.lg, props.md, props.sm, props.xs, props.col)
  if (lgAndUp.value)
    return resolve(props.lg, props.md, props.sm, props.xs, props.col)
  if (mdAndUp.value) return resolve(props.md, props.sm, props.xs, props.col)
  if (smAndUp.value) return resolve(props.sm, props.xs, props.col)
  if (xsAndUp.value) return resolve(props.xs, props.col)
  return resolve(props.col)
})

const columns = computed(() => {
  const columns: T[][] = Array.from({ length: nbColumns.value }, () => [])

  props.items.forEach((item, index) => {
    columns[index % nbColumns.value].push(item)
  })

  return columns
})
</script>

<template>
  <v-row>
    <v-col
      v-for="(column, colIndex) in columns"
      :key="colIndex"
      :cols="12 / nbColumns"
    >
      <div
        v-for="(item, itemIndex) in column"
        :key="itemIndex"
        :class="{ 'mb-6': itemIndex !== column.length - 1 }"
      >
        <slot :item="item" :index="itemIndex" :columnIndex="colIndex">
          Please
          <a
            href="https://github.com/senerh/vuetify-masonry?tab=readme-ov-file#-usage"
            target="_blank"
            rel="noopener"
            >provide a slot</a
          >.
        </slot>
      </div>
    </v-col>
  </v-row>
</template>
