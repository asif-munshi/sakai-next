'use client';

import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { Button } from 'primereact/button';
import { Chart } from 'primereact/chart';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Menu } from 'primereact/menu';
import { ProductService } from '@/demo/service/ProductService';
import { LayoutContext } from '@/components/layout/context/layoutcontext';
import { Demo } from '@/types';

export default function DashboardPage() {
    return <div>DashboardPage</div>;
}
