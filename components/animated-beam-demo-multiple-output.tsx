"use client";
import React from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

function Circle({
  ref,
  className,
  children,
}: {
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      ref={ref}
      className={cn(
        "border-border z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function AnimatedBeamMultipleOutputDemo() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const div1Ref = React.useRef<HTMLDivElement>(null);
  const div2Ref = React.useRef<HTMLDivElement>(null);
  const div3Ref = React.useRef<HTMLDivElement>(null);
  const div4Ref = React.useRef<HTMLDivElement>(null);
  const div5Ref = React.useRef<HTMLDivElement>(null);
  const div6Ref = React.useRef<HTMLDivElement>(null);
  const div7Ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M8.40248 1C7.3938 1 6.42236 1.38108 5.68272 2.06693L2.28024 5.22196C1.46393 5.9789 1 7.04178 1 8.15503L1 14.5C1 16.433 2.567 18 4.5 18H12.5C14.433 18 16 16.433 16 14.5V4.5C16 2.567 14.433 1 12.5 1L8.40248 1Z"
                  fill="url(#1752500502785-6928967_files_existing_0_u7sd7dn4k)"
                  data-glass="origin"
                  mask="url(#1752500502785-6928967_files_mask_412n3jmqd)"
                ></path>
                <path
                  d="M8.40248 1C7.3938 1 6.42236 1.38108 5.68272 2.06693L2.28024 5.22196C1.46393 5.9789 1 7.04178 1 8.15503L1 14.5C1 16.433 2.567 18 4.5 18H12.5C14.433 18 16 16.433 16 14.5V4.5C16 2.567 14.433 1 12.5 1L8.40248 1Z"
                  fill="url(#1752500502785-6928967_files_existing_0_u7sd7dn4k)"
                  data-glass="clone"
                  filter="url(#1752500502785-6928967_files_filter_0whf7kuql)"
                  clip-path="url(#1752500502785-6928967_files_clipPath_5sqyfl1z9)"
                ></path>
                <path
                  d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                  fill="url(#1752500502785-6928967_files_existing_1_yc9h3ai2m)"
                  data-glass="blur"
                ></path>
                <path
                  d="M8 19.5V9.5C8 7.567 9.567 6 11.5 6H15.5977L15.7861 6.00488C16.7267 6.04926 17.624 6.4244 18.3174 7.06738L21.7197 10.2217C22.536 10.9786 23 12.042 23 13.1553V19.5L22.9951 19.6797C22.9046 21.4697 21.4696 22.9046 19.6797 22.9951L19.5 23V22.25C21.0188 22.25 22.25 21.0188 22.25 19.5V13.1553C22.25 12.2508 21.8732 11.3865 21.21 10.7715L17.8076 7.61719C17.2067 7.05997 16.4172 6.75004 15.5977 6.75H11.5C9.98122 6.75 8.75 7.98122 8.75 9.5V19.5C8.75 21.0188 9.98122 22.25 11.5 22.25V23L11.3203 22.9951C9.47083 22.9016 8 21.3727 8 19.5ZM19.5 22.25V23H11.5V22.25H19.5Z"
                  fill="url(#1752500502785-6928967_files_existing_2_bhvt9x3j0)"
                ></path>
                <defs>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_0_u7sd7dn4k"
                    x1="8.5"
                    y1="1"
                    x2="8.5"
                    y2="18"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575757"></stop>
                    <stop offset="1" stop-color="#151515"></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_1_yc9h3ai2m"
                    x1="23"
                    y1="14.5"
                    x2="8"
                    y2="14.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                    <stop
                      offset="1"
                      stop-color="#BBBBC0"
                      stop-opacity=".6"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_2_bhvt9x3j0"
                    x1="15.5"
                    y1="6"
                    x2="15.5"
                    y2="15.845"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                  <filter
                    id="1752500502785-6928967_files_filter_0whf7kuql"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur
                      stdDeviation="2"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                      in="SourceGraphic"
                      edgeMode="none"
                      result="blur"
                    ></feGaussianBlur>
                  </filter>
                  <clipPath id="1752500502785-6928967_files_clipPath_5sqyfl1z9">
                    <path
                      d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                      fill="url(#1752500502785-6928967_files_existing_1_yc9h3ai2m)"
                    ></path>
                  </clipPath>
                  <mask id="1752500502785-6928967_files_mask_412n3jmqd">
                    <rect width="100%" height="100%" fill="#FFF"></rect>
                    <path
                      d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                      fill="#000"
                    ></path>
                  </mask>
                </defs>
              </g>
            </svg>
          </Circle>
          <Circle ref={div2Ref}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M8.40248 1C7.3938 1 6.42236 1.38108 5.68272 2.06693L2.28024 5.22196C1.46393 5.9789 1 7.04178 1 8.15503L1 14.5C1 16.433 2.567 18 4.5 18H12.5C14.433 18 16 16.433 16 14.5V4.5C16 2.567 14.433 1 12.5 1L8.40248 1Z"
                  fill="url(#1752500502785-6928967_files_existing_0_u7sd7dn4k)"
                  data-glass="origin"
                  mask="url(#1752500502785-6928967_files_mask_412n3jmqd)"
                ></path>
                <path
                  d="M8.40248 1C7.3938 1 6.42236 1.38108 5.68272 2.06693L2.28024 5.22196C1.46393 5.9789 1 7.04178 1 8.15503L1 14.5C1 16.433 2.567 18 4.5 18H12.5C14.433 18 16 16.433 16 14.5V4.5C16 2.567 14.433 1 12.5 1L8.40248 1Z"
                  fill="url(#1752500502785-6928967_files_existing_0_u7sd7dn4k)"
                  data-glass="clone"
                  filter="url(#1752500502785-6928967_files_filter_0whf7kuql)"
                  clip-path="url(#1752500502785-6928967_files_clipPath_5sqyfl1z9)"
                ></path>
                <path
                  d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                  fill="url(#1752500502785-6928967_files_existing_1_yc9h3ai2m)"
                  data-glass="blur"
                ></path>
                <path
                  d="M8 19.5V9.5C8 7.567 9.567 6 11.5 6H15.5977L15.7861 6.00488C16.7267 6.04926 17.624 6.4244 18.3174 7.06738L21.7197 10.2217C22.536 10.9786 23 12.042 23 13.1553V19.5L22.9951 19.6797C22.9046 21.4697 21.4696 22.9046 19.6797 22.9951L19.5 23V22.25C21.0188 22.25 22.25 21.0188 22.25 19.5V13.1553C22.25 12.2508 21.8732 11.3865 21.21 10.7715L17.8076 7.61719C17.2067 7.05997 16.4172 6.75004 15.5977 6.75H11.5C9.98122 6.75 8.75 7.98122 8.75 9.5V19.5C8.75 21.0188 9.98122 22.25 11.5 22.25V23L11.3203 22.9951C9.47083 22.9016 8 21.3727 8 19.5ZM19.5 22.25V23H11.5V22.25H19.5Z"
                  fill="url(#1752500502785-6928967_files_existing_2_bhvt9x3j0)"
                ></path>
                <defs>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_0_u7sd7dn4k"
                    x1="8.5"
                    y1="1"
                    x2="8.5"
                    y2="18"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575757"></stop>
                    <stop offset="1" stop-color="#151515"></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_1_yc9h3ai2m"
                    x1="23"
                    y1="14.5"
                    x2="8"
                    y2="14.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                    <stop
                      offset="1"
                      stop-color="#BBBBC0"
                      stop-opacity=".6"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_2_bhvt9x3j0"
                    x1="15.5"
                    y1="6"
                    x2="15.5"
                    y2="15.845"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                  <filter
                    id="1752500502785-6928967_files_filter_0whf7kuql"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur
                      stdDeviation="2"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                      in="SourceGraphic"
                      edgeMode="none"
                      result="blur"
                    ></feGaussianBlur>
                  </filter>
                  <clipPath id="1752500502785-6928967_files_clipPath_5sqyfl1z9">
                    <path
                      d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                      fill="url(#1752500502785-6928967_files_existing_1_yc9h3ai2m)"
                    ></path>
                  </clipPath>
                  <mask id="1752500502785-6928967_files_mask_412n3jmqd">
                    <rect width="100%" height="100%" fill="#FFF"></rect>
                    <path
                      d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                      fill="#000"
                    ></path>
                  </mask>
                </defs>
              </g>
            </svg>
          </Circle>
          <Circle ref={div3Ref}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M8.40248 1C7.3938 1 6.42236 1.38108 5.68272 2.06693L2.28024 5.22196C1.46393 5.9789 1 7.04178 1 8.15503L1 14.5C1 16.433 2.567 18 4.5 18H12.5C14.433 18 16 16.433 16 14.5V4.5C16 2.567 14.433 1 12.5 1L8.40248 1Z"
                  fill="url(#1752500502785-6928967_files_existing_0_u7sd7dn4k)"
                  data-glass="origin"
                  mask="url(#1752500502785-6928967_files_mask_412n3jmqd)"
                ></path>
                <path
                  d="M8.40248 1C7.3938 1 6.42236 1.38108 5.68272 2.06693L2.28024 5.22196C1.46393 5.9789 1 7.04178 1 8.15503L1 14.5C1 16.433 2.567 18 4.5 18H12.5C14.433 18 16 16.433 16 14.5V4.5C16 2.567 14.433 1 12.5 1L8.40248 1Z"
                  fill="url(#1752500502785-6928967_files_existing_0_u7sd7dn4k)"
                  data-glass="clone"
                  filter="url(#1752500502785-6928967_files_filter_0whf7kuql)"
                  clip-path="url(#1752500502785-6928967_files_clipPath_5sqyfl1z9)"
                ></path>
                <path
                  d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                  fill="url(#1752500502785-6928967_files_existing_1_yc9h3ai2m)"
                  data-glass="blur"
                ></path>
                <path
                  d="M8 19.5V9.5C8 7.567 9.567 6 11.5 6H15.5977L15.7861 6.00488C16.7267 6.04926 17.624 6.4244 18.3174 7.06738L21.7197 10.2217C22.536 10.9786 23 12.042 23 13.1553V19.5L22.9951 19.6797C22.9046 21.4697 21.4696 22.9046 19.6797 22.9951L19.5 23V22.25C21.0188 22.25 22.25 21.0188 22.25 19.5V13.1553C22.25 12.2508 21.8732 11.3865 21.21 10.7715L17.8076 7.61719C17.2067 7.05997 16.4172 6.75004 15.5977 6.75H11.5C9.98122 6.75 8.75 7.98122 8.75 9.5V19.5C8.75 21.0188 9.98122 22.25 11.5 22.25V23L11.3203 22.9951C9.47083 22.9016 8 21.3727 8 19.5ZM19.5 22.25V23H11.5V22.25H19.5Z"
                  fill="url(#1752500502785-6928967_files_existing_2_bhvt9x3j0)"
                ></path>
                <defs>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_0_u7sd7dn4k"
                    x1="8.5"
                    y1="1"
                    x2="8.5"
                    y2="18"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575757"></stop>
                    <stop offset="1" stop-color="#151515"></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_1_yc9h3ai2m"
                    x1="23"
                    y1="14.5"
                    x2="8"
                    y2="14.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                    <stop
                      offset="1"
                      stop-color="#BBBBC0"
                      stop-opacity=".6"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_2_bhvt9x3j0"
                    x1="15.5"
                    y1="6"
                    x2="15.5"
                    y2="15.845"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                  <filter
                    id="1752500502785-6928967_files_filter_0whf7kuql"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur
                      stdDeviation="2"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                      in="SourceGraphic"
                      edgeMode="none"
                      result="blur"
                    ></feGaussianBlur>
                  </filter>
                  <clipPath id="1752500502785-6928967_files_clipPath_5sqyfl1z9">
                    <path
                      d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                      fill="url(#1752500502785-6928967_files_existing_1_yc9h3ai2m)"
                    ></path>
                  </clipPath>
                  <mask id="1752500502785-6928967_files_mask_412n3jmqd">
                    <rect width="100%" height="100%" fill="#FFF"></rect>
                    <path
                      d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                      fill="#000"
                    ></path>
                  </mask>
                </defs>
              </g>
            </svg>
          </Circle>
          <Circle ref={div4Ref}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M8.40248 1C7.3938 1 6.42236 1.38108 5.68272 2.06693L2.28024 5.22196C1.46393 5.9789 1 7.04178 1 8.15503L1 14.5C1 16.433 2.567 18 4.5 18H12.5C14.433 18 16 16.433 16 14.5V4.5C16 2.567 14.433 1 12.5 1L8.40248 1Z"
                  fill="url(#1752500502785-6928967_files_existing_0_u7sd7dn4k)"
                  data-glass="origin"
                  mask="url(#1752500502785-6928967_files_mask_412n3jmqd)"
                ></path>
                <path
                  d="M8.40248 1C7.3938 1 6.42236 1.38108 5.68272 2.06693L2.28024 5.22196C1.46393 5.9789 1 7.04178 1 8.15503L1 14.5C1 16.433 2.567 18 4.5 18H12.5C14.433 18 16 16.433 16 14.5V4.5C16 2.567 14.433 1 12.5 1L8.40248 1Z"
                  fill="url(#1752500502785-6928967_files_existing_0_u7sd7dn4k)"
                  data-glass="clone"
                  filter="url(#1752500502785-6928967_files_filter_0whf7kuql)"
                  clip-path="url(#1752500502785-6928967_files_clipPath_5sqyfl1z9)"
                ></path>
                <path
                  d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                  fill="url(#1752500502785-6928967_files_existing_1_yc9h3ai2m)"
                  data-glass="blur"
                ></path>
                <path
                  d="M8 19.5V9.5C8 7.567 9.567 6 11.5 6H15.5977L15.7861 6.00488C16.7267 6.04926 17.624 6.4244 18.3174 7.06738L21.7197 10.2217C22.536 10.9786 23 12.042 23 13.1553V19.5L22.9951 19.6797C22.9046 21.4697 21.4696 22.9046 19.6797 22.9951L19.5 23V22.25C21.0188 22.25 22.25 21.0188 22.25 19.5V13.1553C22.25 12.2508 21.8732 11.3865 21.21 10.7715L17.8076 7.61719C17.2067 7.05997 16.4172 6.75004 15.5977 6.75H11.5C9.98122 6.75 8.75 7.98122 8.75 9.5V19.5C8.75 21.0188 9.98122 22.25 11.5 22.25V23L11.3203 22.9951C9.47083 22.9016 8 21.3727 8 19.5ZM19.5 22.25V23H11.5V22.25H19.5Z"
                  fill="url(#1752500502785-6928967_files_existing_2_bhvt9x3j0)"
                ></path>
                <defs>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_0_u7sd7dn4k"
                    x1="8.5"
                    y1="1"
                    x2="8.5"
                    y2="18"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575757"></stop>
                    <stop offset="1" stop-color="#151515"></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_1_yc9h3ai2m"
                    x1="23"
                    y1="14.5"
                    x2="8"
                    y2="14.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                    <stop
                      offset="1"
                      stop-color="#BBBBC0"
                      stop-opacity=".6"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_2_bhvt9x3j0"
                    x1="15.5"
                    y1="6"
                    x2="15.5"
                    y2="15.845"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                  <filter
                    id="1752500502785-6928967_files_filter_0whf7kuql"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur
                      stdDeviation="2"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                      in="SourceGraphic"
                      edgeMode="none"
                      result="blur"
                    ></feGaussianBlur>
                  </filter>
                  <clipPath id="1752500502785-6928967_files_clipPath_5sqyfl1z9">
                    <path
                      d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                      fill="url(#1752500502785-6928967_files_existing_1_yc9h3ai2m)"
                    ></path>
                  </clipPath>
                  <mask id="1752500502785-6928967_files_mask_412n3jmqd">
                    <rect width="100%" height="100%" fill="#FFF"></rect>
                    <path
                      d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                      fill="#000"
                    ></path>
                  </mask>
                </defs>
              </g>
            </svg>
          </Circle>
          <Circle ref={div5Ref}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M8.40248 1C7.3938 1 6.42236 1.38108 5.68272 2.06693L2.28024 5.22196C1.46393 5.9789 1 7.04178 1 8.15503L1 14.5C1 16.433 2.567 18 4.5 18H12.5C14.433 18 16 16.433 16 14.5V4.5C16 2.567 14.433 1 12.5 1L8.40248 1Z"
                  fill="url(#1752500502785-6928967_files_existing_0_u7sd7dn4k)"
                  data-glass="origin"
                  mask="url(#1752500502785-6928967_files_mask_412n3jmqd)"
                ></path>
                <path
                  d="M8.40248 1C7.3938 1 6.42236 1.38108 5.68272 2.06693L2.28024 5.22196C1.46393 5.9789 1 7.04178 1 8.15503L1 14.5C1 16.433 2.567 18 4.5 18H12.5C14.433 18 16 16.433 16 14.5V4.5C16 2.567 14.433 1 12.5 1L8.40248 1Z"
                  fill="url(#1752500502785-6928967_files_existing_0_u7sd7dn4k)"
                  data-glass="clone"
                  filter="url(#1752500502785-6928967_files_filter_0whf7kuql)"
                  clip-path="url(#1752500502785-6928967_files_clipPath_5sqyfl1z9)"
                ></path>
                <path
                  d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                  fill="url(#1752500502785-6928967_files_existing_1_yc9h3ai2m)"
                  data-glass="blur"
                ></path>
                <path
                  d="M8 19.5V9.5C8 7.567 9.567 6 11.5 6H15.5977L15.7861 6.00488C16.7267 6.04926 17.624 6.4244 18.3174 7.06738L21.7197 10.2217C22.536 10.9786 23 12.042 23 13.1553V19.5L22.9951 19.6797C22.9046 21.4697 21.4696 22.9046 19.6797 22.9951L19.5 23V22.25C21.0188 22.25 22.25 21.0188 22.25 19.5V13.1553C22.25 12.2508 21.8732 11.3865 21.21 10.7715L17.8076 7.61719C17.2067 7.05997 16.4172 6.75004 15.5977 6.75H11.5C9.98122 6.75 8.75 7.98122 8.75 9.5V19.5C8.75 21.0188 9.98122 22.25 11.5 22.25V23L11.3203 22.9951C9.47083 22.9016 8 21.3727 8 19.5ZM19.5 22.25V23H11.5V22.25H19.5Z"
                  fill="url(#1752500502785-6928967_files_existing_2_bhvt9x3j0)"
                ></path>
                <defs>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_0_u7sd7dn4k"
                    x1="8.5"
                    y1="1"
                    x2="8.5"
                    y2="18"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575757"></stop>
                    <stop offset="1" stop-color="#151515"></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_1_yc9h3ai2m"
                    x1="23"
                    y1="14.5"
                    x2="8"
                    y2="14.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                    <stop
                      offset="1"
                      stop-color="#BBBBC0"
                      stop-opacity=".6"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502785-6928967_files_existing_2_bhvt9x3j0"
                    x1="15.5"
                    y1="6"
                    x2="15.5"
                    y2="15.845"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                  <filter
                    id="1752500502785-6928967_files_filter_0whf7kuql"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur
                      stdDeviation="2"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                      in="SourceGraphic"
                      edgeMode="none"
                      result="blur"
                    ></feGaussianBlur>
                  </filter>
                  <clipPath id="1752500502785-6928967_files_clipPath_5sqyfl1z9">
                    <path
                      d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                      fill="url(#1752500502785-6928967_files_existing_1_yc9h3ai2m)"
                    ></path>
                  </clipPath>
                  <mask id="1752500502785-6928967_files_mask_412n3jmqd">
                    <rect width="100%" height="100%" fill="#FFF"></rect>
                    <path
                      d="M15.5975 6C16.6062 6 17.5776 6.38108 18.3173 7.06693L21.7198 10.222C22.5361 10.9789 23 12.0418 23 13.155L23 19.5C23 21.433 21.433 23 19.5 23L11.5 23C9.567 23 8 21.433 8 19.5L8 9.5C8 7.567 9.56701 6 11.5 6L15.5975 6Z"
                      fill="#000"
                    ></path>
                  </mask>
                </defs>
              </g>
            </svg>
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <img src="/companyLOGO.png" alt="theta-x" width={180} height={72} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path
                  d="M15.9414 10C19.8397 10.0001 22.9999 13.1603 23 17.0586C23 18.1307 22.1307 19 21.0586 19H9.94141C8.86932 19 8 18.1307 8 17.0586C8.00012 13.1603 11.1603 10.0001 15.0586 10H15.9414ZM15.5 1C17.433 1 19 2.567 19 4.5C19 6.433 17.433 8 15.5 8C13.567 8 12 6.433 12 4.5C12 2.567 13.567 1 15.5 1Z"
                  fill="url(#1752500502811-1433248_users_existing_0_y95s6luwt)"
                  data-glass="origin"
                  mask="url(#1752500502811-1433248_users_mask_yf9omh5zt)"
                ></path>
                <path
                  d="M15.9414 10C19.8397 10.0001 22.9999 13.1603 23 17.0586C23 18.1307 22.1307 19 21.0586 19H9.94141C8.86932 19 8 18.1307 8 17.0586C8.00012 13.1603 11.1603 10.0001 15.0586 10H15.9414ZM15.5 1C17.433 1 19 2.567 19 4.5C19 6.433 17.433 8 15.5 8C13.567 8 12 6.433 12 4.5C12 2.567 13.567 1 15.5 1Z"
                  fill="url(#1752500502811-1433248_users_existing_0_y95s6luwt)"
                  data-glass="clone"
                  filter="url(#1752500502811-1433248_users_filter_3otwug04l)"
                  clip-path="url(#1752500502811-1433248_users_clipPath_bg1gnmpmw)"
                ></path>
                <path
                  d="M10.3076 12C14.556 12 18 15.444 18 19.6924C18 20.9668 16.9668 22 15.6924 22H4.30762C3.03317 22 2.00004 20.9668 2 19.6924C2 15.444 5.44404 12 9.69238 12H10.3076ZM10 2C12.2091 2 14 3.79086 14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2Z"
                  fill="url(#1752500502811-1433248_users_existing_1_nqwjcp74f)"
                  data-glass="blur"
                ></path>
                <path
                  d="M13.25 6C13.25 4.20507 11.7949 2.75 10 2.75C8.20507 2.75 6.75 4.20507 6.75 6C6.75 7.79493 8.20507 9.25 10 9.25V10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6C14 8.20914 12.2091 10 10 10V9.25C11.7949 9.25 13.25 7.79493 13.25 6Z"
                  fill="url(#1752500502811-1433248_users_existing_2_wnwbkzqj7)"
                ></path>
                <path
                  d="M15.6924 21.25V22H4.30762V21.25H15.6924ZM17.25 19.6924C17.25 15.8583 14.1417 12.75 10.3076 12.75H9.69238C5.85825 12.75 2.75 15.8583 2.75 19.6924C2.75004 20.5526 3.44739 21.25 4.30762 21.25V22C3.11295 22 2.13009 21.0921 2.01172 19.9287L2 19.6924C2 15.5767 5.23229 12.2156 9.29688 12.0098L9.69238 12H10.3076C14.556 12 18 15.444 18 19.6924L17.9883 19.9287C17.8778 21.0145 17.0145 21.8778 15.9287 21.9883L15.6924 22V21.25C16.5526 21.25 17.25 20.5526 17.25 19.6924Z"
                  fill="url(#1752500502811-1433248_users_existing_3_let3hcao2)"
                ></path>
                <defs>
                  <linearGradient
                    id="1752500502811-1433248_users_existing_0_y95s6luwt"
                    x1="15.5"
                    y1="1"
                    x2="15.5"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#575757"></stop>
                    <stop offset="1" stop-color="#151515"></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502811-1433248_users_existing_1_nqwjcp74f"
                    x1="10"
                    y1="2"
                    x2="10"
                    y2="22"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E3E3E5" stop-opacity=".6"></stop>
                    <stop
                      offset="1"
                      stop-color="#BBBBC0"
                      stop-opacity=".6"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502811-1433248_users_existing_2_wnwbkzqj7"
                    x1="10"
                    y1="2"
                    x2="10"
                    y2="6.633"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="1752500502811-1433248_users_existing_3_let3hcao2"
                    x1="10"
                    y1="12"
                    x2="10"
                    y2="17.791"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                  </linearGradient>
                  <filter
                    id="1752500502811-1433248_users_filter_3otwug04l"
                    x="-100%"
                    y="-100%"
                    width="400%"
                    height="400%"
                    filterUnits="objectBoundingBox"
                    primitiveUnits="userSpaceOnUse"
                  >
                    <feGaussianBlur
                      stdDeviation="2"
                      x="0%"
                      y="0%"
                      width="100%"
                      height="100%"
                      in="SourceGraphic"
                      edgeMode="none"
                      result="blur"
                    ></feGaussianBlur>
                  </filter>
                  <clipPath id="1752500502811-1433248_users_clipPath_bg1gnmpmw">
                    <path
                      d="M10.3076 12C14.556 12 18 15.444 18 19.6924C18 20.9668 16.9668 22 15.6924 22H4.30762C3.03317 22 2.00004 20.9668 2 19.6924C2 15.444 5.44404 12 9.69238 12H10.3076ZM10 2C12.2091 2 14 3.79086 14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2Z"
                      fill="url(#1752500502811-1433248_users_existing_1_nqwjcp74f)"
                    ></path>
                  </clipPath>
                  <mask id="1752500502811-1433248_users_mask_yf9omh5zt">
                    <rect width="100%" height="100%" fill="#FFF"></rect>
                    <path
                      d="M10.3076 12C14.556 12 18 15.444 18 19.6924C18 20.9668 16.9668 22 15.6924 22H4.30762C3.03317 22 2.00004 20.9668 2 19.6924C2 15.444 5.44404 12 9.69238 12H10.3076ZM10 2C12.2091 2 14 3.79086 14 6C14 8.20914 12.2091 10 10 10C7.79086 10 6 8.20914 6 6C6 3.79086 7.79086 2 10 2Z"
                      fill="#000"
                    ></path>
                  </mask>
                </defs>
              </g>
            </svg>
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}
