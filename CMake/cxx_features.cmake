cmake_minimum_required(VERSION 3.11)

if(CMAKE_CXX_COMPILER_ID STREQUAL "Clang")
  if(WIN32 AND NOT MINGW)
    function(__cxx_feature_process)
      __cxx_feature_clang_cl(${ARGN})
    endfunction()
  else()
    if(CXX_STDLIB STREQUAL "libc++")
      function(__cxx_feature_process)
        __cxx_feature_clang_libcxx(${ARGN})
      endfunction()
    else()
      function(__cxx_feature_process)
        __cxx_feature_gnu(${ARGN})
      endfunction()
    endif()
  endif ()
elseif (CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
  function(__cxx_feature_process)
    __cxx_feature_gnu(${ARGN})
  endfunction()
elseif (CMAKE_CXX_COMPILER_ID STREQUAL "MSVC")
  function(__cxx_feature_process)
    __cxx_feature_msvc(${ARGN})
  endfunction()
endif ()

function(target_cxx_features TARGET)
  foreach(feature IN LISTS ARGN)
    __cxx_feature_process(${TARGET} ${feature})
  endforeach()
endfunction()


function(__cxx_feature_clang_cl T F)
endfunction()

function(__cxx_feature_clang_libcxx T F)
  if(F STREQUAL "filesystem")
    target_link_libraries(${T} INTERFACE c++fs)
  elseif(F STREQUAL "threads")
    target_compile_options(${T} PUBLIC "-pthread")
  endif()
endfunction()

function(__cxx_feature_gnu T F)
  if(F STREQUAL "filesystem")
    target_link_libraries(${T} INTERFACE stdc++fs)
  elseif(F STREQUAL "threads")
    target_compile_options(${T} PUBLIC "-pthread")
  endif()
endfunction()

function(__cxx_feature_msvc T F)
endfunction()
