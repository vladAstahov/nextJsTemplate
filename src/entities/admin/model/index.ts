"use client";

import { adminStorage } from '@/shared/storage/admin'
import { createEffect } from 'effector'

const authorizeFx = createEffect(() => adminStorage.setIsAuth('1'))

export const isAuthAdminModel = {
    authorizeFx
}